import { NextResponse } from 'next/server';
import prisma from '@/prismaClient';

// Helper function to get date from 45 days ago
function getDateDaysAgo(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

export async function GET(request: Request) {
  try {
    // Check for API key in the request headers or query params for security
    const { searchParams } = new URL(request.url);
    const apiKey = searchParams.get('key') || request.headers.get('x-api-key');
    
    // Verify the API key (you should set this in your environment variables)
    if (apiKey !== process.env.CRON_API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 401 }
      );
    }

    const cutoffDate = getDateDaysAgo(45);
    
    // Find old entries to delete (older than 45 days)
    const oldEntries = await prisma.entry.findMany({
      where: {
        createdAt: {
          lt: cutoffDate
        }
      },
      include: {
        winners: true
      }
    });
    
    // Delete related winners first to avoid foreign key constraints
    const entryIds = oldEntries.map(entry => entry.id);
    
    // Delete winners associated with these entries
    const deletedWinners = await prisma.winner.deleteMany({
      where: {
        entryId: {
          in: entryIds
        }
      }
    });
    
    // Delete the old entries
    const deletedEntries = await prisma.entry.deleteMany({
      where: {
        id: {
          in: entryIds
        }
      }
    });
    
    // Also clean up old draws and their related records
    const oldDraws = await prisma.draw.findMany({
      where: {
        createdAt: {
          lt: cutoffDate
        }
      },
      include: {
        winners: true,
        iterations: true
      }
    });
    
    const drawIds = oldDraws.map(draw => draw.id);
    
    // Delete related records first
    await prisma.winner.deleteMany({
      where: {
        drawId: {
          in: drawIds
        }
      }
    });
    
    await prisma.shuffleIteration.deleteMany({
      where: {
        drawId: {
          in: drawIds
        }
      }
    });
    
    // Delete the old draws
    const deletedDraws = await prisma.draw.deleteMany({
      where: {
        id: {
          in: drawIds
        }
      }
    });
    
    return NextResponse.json({
      success: true,
      deletedEntries: deletedEntries.count,
      deletedWinners: deletedWinners.count,
      deletedDraws: deletedDraws.count,
      message: `Cleaned up ${deletedEntries.count} entries, ${deletedWinners.count} winners, and ${deletedDraws.count} draws older than 45 days.`
    });
  } catch (error) {
    console.error('Error cleaning up old data:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      },
      { status: 500 }
    );
  }
} 