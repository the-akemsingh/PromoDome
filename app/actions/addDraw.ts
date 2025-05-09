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
    // Debug iterations
    console.log(`Received ${iterations.length} iterations`);
    iterations.forEach((iter, i) => {
      console.log(`Iteration ${iter.iteration}: ${iter.entries.length} entries`);
    });

    // First check if promo exists
    console.log(JSON.stringify(iterations))
    let promo = await prisma.promo.findFirst({
      where: {
        name: promoTitle
      }
    });

    // Create if it doesn't exist, update if it does
    if (promo) {
      promo = await prisma.promo.update({
        where: {
          id: promo.id
        },
        data: {
          updatedAt: new Date()
        }
      });
    } else {
      promo = await prisma.promo.create({
        data: {
          name: promoTitle
        }
      });
    }

    // First retrieve existing entries for this promo to avoid conflicts
    const existingEntries = await prisma.entry.findMany({
      where: {
        promoId: promo.id,
      },
      select: {
        name: true,
        id: true
      }
    });

    const existingEntryNames = existingEntries.map(entry => entry.name);
    const existingEntryMap = Object.fromEntries(
      existingEntries.map(entry => [entry.name, entry.id])
    );

    // Filter out entries that already exist
    const newEntryNames = entries.filter(name => !existingEntryNames.includes(name));

    // Create new entries (if any)
    let newEntries:any = [];
    if (newEntryNames.length > 0) {
      const createdEntries = await prisma.entry.createMany({
        data: newEntryNames.map(name => ({
          name,
          promoId: promo.id
        })),
        skipDuplicates: true, // Skip any duplicates that might happen
      });
      
      // Fetch the newly created entries to get their IDs
      if (createdEntries.count > 0) {
        newEntries = await prisma.entry.findMany({
          where: {
            promoId: promo.id,
            name: {
              in: newEntryNames
            }
          },
          select: {
            name: true,
            id: true
          }
        });
      }
    }

    // Combine existing and new entries
    const allEntryRecords = [
      ...existingEntries,
      ...newEntries
    ];

    // Create a mapping of entry names to entry records for easy lookup
    const entryMap = {
      ...existingEntryMap,
      ...Object.fromEntries(newEntries.map((entry: {name: string, id: string}) => [entry.name, entry.id]))
    };

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

    // Create winner records with rankings
    await Promise.all(
      winners.map(async (winnerName, index) => {
        // Find the entry ID for this winner name
        const entryId = entryMap[winnerName];
        
        if (!entryId) {
          console.warn(`Winner entry not found: ${winnerName}`);
          return null;
        }
        
        return prisma.winner.create({
          data: {
            drawId: draw.id,
            entryId: entryId,
            rank: index + 1
          }
        });
      }).filter(Boolean)
    );

    // Make sure your console.log is working to debug
    console.log("Saving iterations:", JSON.stringify(iterations));

    // Save shuffle iterations if provided
    if (iterations && iterations.length > 0) {
      await Promise.all(
        iterations.map(async (iter) => {
          console.log(`Saving iteration ${iter.iteration} with ${iter.entries.length} entries`);
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
