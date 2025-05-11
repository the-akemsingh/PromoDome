"use server"
import prisma from "@/prismaClient"

// Helper function to get date from 45 days ago
function getDateDaysAgo(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

// Function to clean up old entries and draws
export async function cleanupOldData() {
  try {
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
    
    if (entryIds.length > 0) {
      // Delete winners associated with these entries
      await prisma.winner.deleteMany({
        where: {
          entryId: {
            in: entryIds
          }
        }
      });
      
      // Delete the old entries
      await prisma.entry.deleteMany({
        where: {
          id: {
            in: entryIds
          }
        }
      });
    }
    
    // Also clean up old draws and their related records
    const oldDraws = await prisma.draw.findMany({
      where: {
        createdAt: {
          lt: cutoffDate
        }
      }
    });
    
    const drawIds = oldDraws.map(draw => draw.id);
    
    if (drawIds.length > 0) {
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
      await prisma.draw.deleteMany({
        where: {
          id: {
            in: drawIds
          }
        }
      });
    }
    
    console.log(`Cleanup complete: Removed data older than 45 days`);
    return { success: true };
  } catch (error) {
    console.error('Error cleaning up old data:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
} 