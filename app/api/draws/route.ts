import { NextResponse } from 'next/server'
import prisma from '@/prismaClient'

export async function GET() {
  try {
    const draws = await prisma.draw.findMany({
      where: {
        promo: {
          isReset: false
        }
      },
      include: {
        promo: {
          select: {
            name: true,
            isReset: true
          }
        },
        winners: {
          include: {
            entry: {
              select: {
                name: true
              }
            }
          }
        },
        iterations: {
          select: {
            id: true,
            iteration: true,
            entries: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Log the iterations count for debugging
    draws.forEach(draw => {
      console.log(`Draw ${draw.id} has ${draw.iterations.length} iterations`);
    });

    return NextResponse.json(draws)
  } catch (error) {
    console.error('Error fetching draws:', error)
    return NextResponse.json(
      { error: 'Failed to fetch draws' },
      { status: 500 }
    )
  }
} 