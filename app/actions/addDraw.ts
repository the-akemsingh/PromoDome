"use server"
import prisma from "@/prismaClient"
import { v4 as uuidv4 } from 'uuid'

interface ShuffleIteration {
  iteration: number;
  entries: string[];
}

interface AddDrawParams {
  promoTitle: string;
  entries: string[];
  numRounds: number;
  shuffleCount: number;
  usingQuantum: boolean;
  winners: string[];
  iterations?: ShuffleIteration[];
}

export async function addDraw({
  promoTitle,
  entries,
  numRounds,
  shuffleCount,
  usingQuantum,
  winners,
  iterations = []
}: AddDrawParams) {
  try {
    // Create or find the promo
    const promo = await prisma.promo.upsert({
      where: { 
        name: promoTitle 
      },
      update: {
        updatedAt: new Date()
      },
      create: {
        name: promoTitle
      }
    });

    // Create entries if they don't exist
    const entryRecords = await Promise.all(
      entries.map(async (entryName) => {
        return prisma.entry.upsert({
          where: {
            promoId_name: {
              promoId: promo.id,
              name: entryName
            }
          },
          update: {},
          create: {
            name: entryName,
            promoId: promo.id
          }
        });
      })
    );

    // Generate verification code
    const verificationCode = uuidv4();

    // Create the draw record
    const draw = await prisma.draw.create({
      data: {
        promoId: promo.id,
        numRounds,
        shuffleCount,
        usingQuantum,
        verificationCode
      }
    });

    // Find the winning entries
    const winnerEntities = entryRecords.filter(entry => 
      winners.includes(entry.name)
    );

    // Create winner records with rankings
    await Promise.all(
      winnerEntities.map(async (entry, index) => {
        return prisma.winner.create({
          data: {
            drawId: draw.id,
            entryId: entry.id,
            rank: index + 1
          }
        });
      })
    );

    // Save shuffle iterations if provided
    if (iterations && iterations.length > 0) {
      await Promise.all(
        iterations.map(async (iter) => {
          return prisma.shuffleIteration.create({
            data: {
              drawId: draw.id,
              iteration: iter.iteration,
              entries: iter.entries
            }
          });
        })
      );
    }

    return { 
      success: true, 
      drawId: draw.id,
      verificationCode: draw.verificationCode 
    };
  } catch (error) {
    console.error("Error saving draw:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}
