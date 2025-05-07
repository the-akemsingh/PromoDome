/**
 * Utility for shuffling arrays using various randomization methods
 */

// Regular Fisher-Yates shuffle algorithm
export const shuffle = <T>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Simulate quantum randomness - in a real app, this would call a quantum API
export const quantumShuffle = async <T>(array: T[]): Promise<T[]> => {
  // In a real implementation, this would call a quantum random number API
  // For this demo, we'll simulate it with a small delay and different shuffle method
  await new Promise(resolve => setTimeout(resolve, 300));
  
  try {
    const result = [...array];
    
    // Simulation of a quantum-based shuffle
    for (let i = result.length - 1; i > 0; i--) {
      // Generate a "quantum" index
      const quantumValue = crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1);
      const j = Math.floor(quantumValue * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    
    return result;
  } catch (error) {
    console.error("Quantum shuffle failed, falling back to regular shuffle:", error);
    return shuffle(array);
  }
};

// Multiple rounds of shuffling
export const multiShuffle = async <T>(array: T[], rounds: number = 3): Promise<T[]> => {
  let result = [...array];
  
  try {
    // Apply quantum shuffling for each round
    for (let i = 0; i < rounds; i++) {
      result = await quantumShuffle(result);
    }
    return result;
  } catch (error) {
    // Fallback to regular shuffling if quantum fails
    console.error("Error in multiShuffle:", error);
    for (let i = 0; i < rounds; i++) {
      result = shuffle(result);
    }
    return result;
  }
};

// Custom shuffle for specific use cases
export const customShuffle = <T>(array: T[], seed?: number): T[] => {
  const result = [...array];
  
  // If seed is provided, use it for deterministic shuffling
  const seedValue = seed || Date.now();
  
  // Simple seeded random function
  const seededRandom = (max: number) => {
    const x = Math.sin(seedValue + 1) * 10000;
    return (x - Math.floor(x)) * max;
  };
  
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  
  return result;
}; 