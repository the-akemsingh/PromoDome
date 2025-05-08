import { NextResponse } from 'next/server'
import prisma from '@/prismaClient'

export async function GET() {
  try {
    const draws = await prisma.draw.findMany({
      include: {
        promo: {
          select: {
            name: true
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

    return NextResponse.json(draws)
  } catch (error) {
    console.error('Error fetching draws:', error)
    return NextResponse.json(
      { error: 'Failed to fetch draws' },
      { status: 500 }
    )
  }
} 