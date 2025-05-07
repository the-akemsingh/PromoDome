"use server"
import prisma from "@/prismaClient"

interface AddDrawParams {
  promoTitle: string;
  entries: string[];
  numRounds: number;
  shuffleCount: number;
  usingQuantum: boolean;
  winners: string[];
}

export async function addDraw({
  promoTitle,
  entries,
  numRounds,
  shuffleCount,
  usingQuantum,
  winners
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

    // Create the draw record
    const draw = await prisma.draw.create({
      data: {
        promoId: promo.id,
        numRounds,
        shuffleCount,
        usingQuantum
      }
    });

    // Find the winning entries
    const winnerEntities = entryRecords.filter((entry:any) => 
      winners.includes(entry.name)
    );

    // Create winner records with rankings
    await Promise.all(
      winnerEntities.map(async (entry:any, index:any) => {
        return prisma.winner.create({
          data: {
            drawId: draw.id,
            entryId: entry.id,
            rank: index + 1
          }
        });
      })
    );

    return { success: true, drawId: draw.id };
  } catch (error:any) {
    console.error("Error saving draw:", error);
    return { success: false, error: error.message };
  }
}
