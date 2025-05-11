"use server"
import prisma from "@/prismaClient"
import { v4 as uuidv4 } from 'uuid'
import { cleanupOldData } from './cleanupData'

interface ShuffleIteration {
  iteration: number;
  entries: string[];
}

interface CreateDrawParams {
  promoTitle: string;
  entries: string[];
  numRounds: number;
  shuffleCount: number;
  usingQuantum: boolean;
}

interface AddDrawParams {
  drawId: string;
  winners: string[];
}

interface AddIterationParams {
  drawId: string;
  iteration: number;
  entries: string[];
}

// Create a new draw at the start of the process
export async function createDraw({
  promoTitle,
  entries,
  numRounds,
  shuffleCount,
  usingQuantum,
}: CreateDrawParams) {
  try {
    // First check if promo exists
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

    return { 
      success: true, 
      drawId: draw.id,
      verificationCode: draw.verificationCode,
      entryMap: {
        ...existingEntryMap,
        ...Object.fromEntries(newEntries.map((entry: {name: string, id: string}) => [entry.name, entry.id]))
      }
    };
  } catch (error) {
    console.error("Error creating draw:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}

// Add an iteration during the shuffling process
export async function addIteration({
  drawId,
  iteration,
  entries,
}: AddIterationParams) {
  try {
    console.log(`Adding iteration ${iteration} with ${entries.length} entries to draw ${drawId}`);
    
    // Validate drawId
    if (!drawId) {
      console.error("Cannot add iteration: drawId is null or undefined");
      return { 
        success: false, 
        error: "Draw ID is required" 
      };
    }
    
    // Check if the draw exists
    const drawExists = await prisma.draw.findUnique({
      where: { id: drawId }
    });
    
    if (!drawExists) {
      console.error(`Cannot add iteration: draw with ID ${drawId} not found`);
      return { 
        success: false, 
        error: "Draw not found" 
      };
    }
    
    // Create the shuffle iteration
    const createdIteration = await prisma.shuffleIteration.create({
      data: {
        drawId,
        iteration,
        entries
      }
    });

    console.log(`Successfully added iteration ${iteration} with ID ${createdIteration.id}`);
    
    return { 
      success: true,
      iterationId: createdIteration.id
    };
  } catch (error) {
    console.error("Error adding iteration:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}

// Add winners to the draw at the end
export async function addDraw({
  drawId,
  winners,
}: AddDrawParams) {
  try {
    // Get the draw to check it exists
    const draw = await prisma.draw.findUnique({
      where: { id: drawId },
      include: {
        promo: {
          include: {
            entries: true
          }
        }
      }
    });

    if (!draw) {
      return { 
        success: false, 
        error: 'Draw not found' 
      };
    }

    // Create an entry map for quick lookups
    const entryMap = Object.fromEntries(
      draw.promo.entries.map(entry => [entry.name, entry.id])
    );

    // Create winner records with rankings
    await Promise.all(
      winners.map(async (winnerName, index) => {
        // Remove any suffix from the winner name before looking up
        const baseName = winnerName.replace(/-\d+$/, '');
        
        // Find the entry ID for this winner name
        const entryId = entryMap[baseName];
        
        if (!entryId) {
          console.warn(`Winner entry not found: ${baseName}`);
          return null;
        }
        
        return prisma.winner.create({
          data: {
            drawId,
            entryId,
            rank: index + 1
          }
        });
      }).filter(Boolean)
    );

    // Run the cleanup function to remove old data (45+ days)
    cleanupOldData().catch(error => {
      console.error("Error during data cleanup:", error);
    });

    return { 
      success: true, 
      drawId,
      verificationCode: draw.verificationCode 
    };
  } catch (error) {
    console.error("Error saving winners:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}

// Cancel a draw by resetting its promo
export async function cancelDraw(drawId: string) {
  try {
    // First get the draw to find its promo
    const draw = await prisma.draw.findUnique({
      where: { id: drawId },
      select: { promoId: true }
    });

    if (!draw) {
      return { 
        success: false, 
        error: "Draw not found" 
      };
    }

    // Mark the promo as reset
    await prisma.promo.update({
      where: { id: draw.promoId },
      data: { 
        isReset: true 
      }
    });
    
    return { success: true };
  } catch (error) {
    console.error("Error resetting promo:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}
