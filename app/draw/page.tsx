"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { multiShuffle } from '@/lib/shuffle'
import MultipleDice from '@/components/MultipleDice'
import EntryTable from '@/components/EntryTable'
import { createDraw, addIteration, addDraw, cancelDraw } from '@/app/actions/addDraw'
import { useTheme } from '@/context/ThemeContext'

const Draw = () => {
    // Combine related states into objects to reduce state updates
    const [drawState, setDrawState] = useState({
        promoTitle: '',
        entries: [''],
        numRounds: 0,
        diceResult: null as number | null,
        isRolling: false,
        isShuffling: false,
        shuffledEntries: [] as string[],
        winner: null as string | null,
        promoStarted: false,
        diceCount: 1,
        currentRound: 0,
        usingQuantum: true,
        shuffleError: null as string | null,
        numWinners: 1,
        winners: [] as string[],
        processedEntries: [] as string[],
        manualRounds: '',
        useManualRounds: false,
        originalEntries: [] as { id: number, entry: string }[],
        showInitialEntries: false,
        saveStatus: null as string | null,
        verificationCode: null as string | null,
        copied: false,
        iterationResults: [] as { iteration: number, entries: string[] }[],
        showIterationResults: false,
        selectedIteration: null as number | null,
        currentDrawId: null as string | null,
        savingError: null as string | null,
        resetDice: false
    });

    const drawIdRef = useRef<string | null>(null);

    // Memoize expensive calculations
    const validEntriesCount = useMemo(() =>
        drawState.entries.filter(entry => entry.trim()).length,
        [drawState.entries]
    );

    // Memoize filtered entries
    const filteredEntries = useMemo(() =>
        drawState.entries.filter(entry => entry.trim()),
        [drawState.entries]
    );

    // Reset shuffled entries when entries change
    useEffect(() => {
        setDrawState(prev => ({
            ...prev,
            shuffledEntries: filteredEntries
        }));
    }, [filteredEntries]);

    // Helper function to add suffixes to duplicate entries
    const addSuffixesToDuplicates = (entries: string[]): { displayEntries: string[], internalEntries: string[] } => {
        const counter: { [key: string]: number } = {};
        const internalEntries: string[] = [];
        const displayEntries: string[] = [];

        entries.forEach(entry => {
            if (entry.trim()) {
                displayEntries.push(entry); // Keep original entry for display

                // For internal use (shuffling), add suffix if duplicate
                if (counter[entry]) {
                    counter[entry]++;
                    internalEntries.push(`${entry}-${counter[entry]}`);
                } else {
                    counter[entry] = 1;
                    internalEntries.push(entry);
                }
            }
        });

        return { displayEntries, internalEntries };
    };

    // Optimize entry change handler with useCallback
    const handleEntryChange = useCallback((text: string) => {
        const lines = text.split('\n');
        const filtered = lines.filter(entry => entry.trim());
        const { displayEntries, internalEntries } = addSuffixesToDuplicates(filtered);
        const originalWithOrder = displayEntries.map((entry, index) => ({
            id: index + 1,
            entry
        }));

        setDrawState(prev => ({
            ...prev,
            entries: lines,
            processedEntries: internalEntries,
            originalEntries: originalWithOrder
        }));
    }, []);

    // Optimize roll dice handler
    const rollDice = useCallback(() => {
        setDrawState(prev => ({
            ...prev,
            isRolling: true,
            diceResult: null,
            winner: null,
            winners: [],
            shuffleError: null
        }));
    }, []);

    // Optimize handle roll complete
    const handleRollComplete = useCallback((total: number) => {
        setDrawState(prev => ({
            ...prev,
            isRolling: false,
            diceResult: total,
            numRounds: total
        }));
    }, []);

    const handleManualRoundsChange = (value: string) => {
        const filteredValue = value.replace(/[^0-9]/g, '');
        setDrawState(prev => ({
            ...prev,
            manualRounds: filteredValue
        }));

        if (filteredValue !== '') {
            const rounds = parseInt(filteredValue, 10);
            setDrawState(prev => ({
                ...prev,
                diceResult: rounds,
                numRounds: rounds
            }));
        } else {
            setDrawState(prev => ({
                ...prev,
                diceResult: null,
                numRounds: 0
            }));
        }
    }

    const toggleRoundsMode = () => {
        setDrawState(prev => ({
            ...prev,
            useManualRounds: !prev.useManualRounds,
            diceResult: !prev.useManualRounds
                ? (prev.manualRounds !== '' ? parseInt(prev.manualRounds, 10) : null)
                : null,
            manualRounds: prev.useManualRounds ? '' : prev.manualRounds
        }));
    };

    // Optimize start promo with useCallback
    const startPromo = useCallback(async () => {
        if (!drawState.diceResult || drawState.diceResult < 1) return;

        const internalEntries = drawState.processedEntries.length > 0
            ? drawState.processedEntries
            : filteredEntries;

        if (internalEntries.length < 2) return;

        if (drawState.numWinners > internalEntries.length) {
            setDrawState(prev => ({
                ...prev,
                shuffleError: `Not enough entries (${internalEntries.length}) for ${drawState.numWinners} winners`
            }));
            return;
        }

        // Reset state before starting
        setDrawState(prev => ({
            ...prev,
            promoStarted: true,
            isShuffling: true,
            winner: null,
            winners: [],
            currentRound: 0,
            shuffleError: null,
            iterationResults: []
        }));

        // Initialize with internal entries (which now have suffixes for duplicates)
        let currentShuffled = [...internalEntries];

        // Store mapping of internal entries to display entries
        const entryMapping = new Map<string, string>();
        internalEntries.forEach((entry) => {
            // If the entry has a suffix (contains '-'), extract the original entry
            if (entry.includes('-')) {
                const originalEntry = entry.substring(0, entry.lastIndexOf('-'));
                entryMapping.set(entry, originalEntry);
            } else {
                entryMapping.set(entry, entry);
            }
        });

        // For display, convert internal entries to display entries
        const displayShuffled = currentShuffled.map(entry => entryMapping.get(entry) || entry);
        setDrawState(prev => ({
            ...prev,
            shuffledEntries: displayShuffled
        }));

        // Save initial state as iteration 0 (using display entries)
        const initialIteration = {
            iteration: 0,
            entries: [...displayShuffled]
        };
        setDrawState(prev => ({
            ...prev,
            iterationResults: [initialIteration]
        }));

        // Create draw with display entries (without suffixes)
        let drawId: string | null = null;
        try {
            setDrawState(prev => ({ ...prev, saveStatus: "Creating draw..." }));
            const result = await createDraw({
                promoTitle: drawState.promoTitle.trim(),
                entries: displayShuffled, // Use display entries for the database
                numRounds: drawState.diceResult,
                shuffleCount: 3,
                usingQuantum: drawState.usingQuantum
            });

            if (!result.success || !result.drawId) {
                setDrawState(prev => ({
                    ...prev,
                    saveStatus: `Error: ${result.error || "Failed to create draw"}`,
                    savingError: result.error || "Failed to create draw"
                }));
                return;
            }

            // Update state and ref
            drawId = result.drawId;
            console.log("Draw created successfully with ID:", drawId);
            drawIdRef.current = drawId;
            setDrawState(prev => ({
                ...prev,
                currentDrawId: drawId,
                verificationCode: result.verificationCode || null,
                saveStatus: "Draw created, starting shuffling..."
            }));
        } catch (error) {
            console.error("Error creating draw:", error);
            setDrawState(prev => ({
                ...prev,
                saveStatus: "Failed to create draw"
            }));
            return;
        }

        if (!drawId) {
            console.error("No draw ID available");
            return;
        }

        try {
            // Process each round sequentially but with minimal delay
            const totalRounds = drawState.diceResult;
            
            // Ensure totalRounds is a valid number
            if (!totalRounds || isNaN(totalRounds) || totalRounds <= 0) {
                throw new Error("Invalid number of rounds");
            }
            
            // Create an array to store all iterations
            const allIterations = [{
                iteration: 0,
                entries: [...displayShuffled] // Initial state
            }];
            
            // Process each round one by one
            for (let i = 0; i < totalRounds; i++) {
                // Perform the shuffle
                currentShuffled = await multiShuffle(currentShuffled, 3);
                
                // Store this iteration result
                const iterationResult = {
                    iteration: i + 1,
                    entries: [...currentShuffled]
                };
                
                // Add to our local array
                allIterations.push(iterationResult);
                
                // Update UI for each round
                setDrawState(prev => ({
                    ...prev,
                    currentRound: i + 1,
                    shuffledEntries: [...currentShuffled],
                    // Replace the entire iterationResults array to avoid state inconsistencies
                    iterationResults: [...allIterations]
                }));
                
                // Very minimal delay for visual feedback (far less than original 300ms)
                if (i < totalRounds - 1) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
                
                // Save iteration to DB without waiting for response to keep things fast
                addIteration({
                    drawId: drawId!,
                    iteration: i + 1,
                    entries: currentShuffled
                }).catch(error => {
                    console.error(`Error saving iteration ${i + 1}:`, error);
                });
            }
        } catch (error) {
            console.error("Error during shuffle:", error);
            setDrawState(prev => ({
                ...prev,
                shuffleError: "Error using quantum randomness. Fell back to standard shuffle.",
                usingQuantum: false
            }));
        } finally {
            // Ensure we set current round to the final round number for UI consistency
            setDrawState(prev => ({
                ...prev,
                currentRound: drawState.diceResult || 0,
                isShuffling: false
            }));

            // Set the winners (top entries after shuffling based on numWinners)
            if (currentShuffled.length > 0) {
                if (drawState.numWinners === 1) {
                    setDrawState(prev => ({
                        ...prev,
                        winner: currentShuffled[0],
                        winners: [currentShuffled[0]]
                    }));
                } else {
                    const selectedWinners = currentShuffled.slice(0, drawState.numWinners);
                    setDrawState(prev => ({
                        ...prev,
                        winners: selectedWinners,
                        winner: selectedWinners[0]
                    }));
                }

                // Save the winners with suffixes to DB
                if (drawId) {
                    const winnersWithSuffix = currentShuffled.slice(0, drawState.numWinners);
                    saveWinnersToDB(drawId, winnersWithSuffix);
                } else {
                    console.error("Cannot save winners: drawId is not available");
                }
            }

            // Finally set everything up correctly after shuffle completes
            setDrawState(prev => ({
                ...prev,
                currentRound: drawState.diceResult || 0,
                isShuffling: false,
                // Make sure selectedIteration points to the final round
                selectedIteration: drawState.diceResult || 0,
                showIterationResults: true
            }));
        }
    }, [drawState, filteredEntries]);

    // Function to save winners to the database
    const saveWinnersToDB = async (drawId: string, winnerEntries: string[]) => {
        if (!drawId) {
            setDrawState(prev => ({
                ...prev,
                saveStatus: "Error: No active draw ID"
            }));
            return;
        }

        try {
            setDrawState(prev => ({
                ...prev,
                saveStatus: "Saving winners..."
            }));

            const result = await addDraw({
                drawId: drawId as string, // Type assertion since we've checked it's not null
                winners: winnerEntries
            });

            if (result.success) {
                setDrawState(prev => ({
                    ...prev,
                    saveStatus: "Results saved successfully"
                }));
                setTimeout(() => setDrawState(prev => ({ ...prev, saveStatus: null })), 3000);
            } else {
                setDrawState(prev => ({
                    ...prev,
                    saveStatus: `Error: ${result.error}`
                }));
            }
        } catch (error) {
            console.error("Error saving winners:", error);
            setDrawState(prev => ({
                ...prev,
                saveStatus: "Failed to save winners"
            }));
        }
    };

    // Optimize cancel promo with useCallback
    const cancelPromo = useCallback(async () => {
        if (drawState.winners.length === 0) {
            const drawIdValue = drawIdRef.current;
            if (drawIdValue) {
                try {
                    setDrawState(prev => ({ ...prev, saveStatus: "Cancelling draw..." }));
                    await cancelDraw(drawIdValue);
                    setDrawState(prev => ({ ...prev, saveStatus: "Draw cancelled" }));
                    setTimeout(() => setDrawState(prev => ({ ...prev, saveStatus: null })), 3000);
                } catch (error) {
                    console.error("Error cancelling draw:", error);
                    setDrawState(prev => ({ ...prev, saveStatus: "Failed to cancel draw" }));
                    setTimeout(() => setDrawState(prev => ({ ...prev, saveStatus: null })), 3000);
                }
            }
        }

        // Reset all state
        setDrawState({
            promoTitle: '',
            entries: [''],
            numRounds: 0,
            diceResult: null,
            isRolling: false,
            isShuffling: false,
            shuffledEntries: [],
            winner: null,
            promoStarted: false,
            diceCount: 1,
            currentRound: 0,
            usingQuantum: true,
            shuffleError: null,
            numWinners: 1,
            winners: [],
            processedEntries: [],
            manualRounds: '',
            useManualRounds: false,
            originalEntries: [],
            showInitialEntries: false,
            saveStatus: null,
            verificationCode: null,
            copied: false,
            iterationResults: [],
            showIterationResults: false,
            selectedIteration: null,
            currentDrawId: null,
            savingError: null,
            resetDice: true
        });
        drawIdRef.current = null;

        // Reset the resetDice flag after a short delay
        setTimeout(() => {
            setDrawState(prev => ({ ...prev, resetDice: false }));
        }, 100);

        window.location.reload();
    }, [drawState.winners.length]);

    // Add a new state for the current time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Create a useEffect hook to update the time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col bg-white dark:bg-white justify-center items-center text-black dark:text-white py-10 md:py-12 lg:py-16 px-4 md:px-8">
            <motion.div
                className="w-full max-w-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="text-center flex flex-col items-center mb-8 md:mb-12">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold cal-sans-regular mb-2 text-red-400 dark:text-red-500"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 120 }}
                        style={{ fontFamily: 'ATCtimberlime' }}
                    >
                        PROMO
                    </motion.h1>
                    <motion.h1
                        className="text-xl md:text-3xl lg:text-4xl font-extrabold cal-sans-regular mb-2 text-red-400 dark:text-red-500"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontFamily: 'QuiveraRegular', letterSpacing: '0.2em' }}
                        transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 120 }}
                    >
                        D O M E
                    </motion.h1>

                </div>

                <div className="flex flex-col gap-6 md:gap-8">
                    {/* Left column */}
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {/* Promo Title */}
                            <div className='flex flex-col justify-end gap-2'>
                                <div className=" text-xl md:text-5xl text-center mb-10 text-black dark:text-black" style={{ fontFamily: 'CostaRica' }}>
                                    Quantum RNG
                                </div>
                                <div className="flex max-h-14 lg:min-w-xl items-center p-2 rounded">
                                    <div className="font-medium text-black  dark:text-black bg-gray-300 py-1 w-24 pl-2">Promo Title</div>
                                    <div className="flex-grow">
                                        <input
                                            type="text"
                                            required
                                            placeholder="(Title/name of your promotion)"
                                            value={drawState.promoTitle}
                                            onChange={(e) => setDrawState(prev => ({ ...prev, promoTitle: e.target.value }))}
                                            disabled={drawState.promoStarted}
                                            className="w-full px-3 py-1 bg-white border border-gray-300 text-gray-500  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                                        />
                                    </div>
                                </div>
                                <div className="flex max-h-14 lg:min-w-xl items-center  p-2 ">
                                    <div className="font-medium min-w-40 text-black dark:text-black bg-gray-300 py-1 w-24 pl-2">Number of Winners</div>
                                    <div className="flex-grow">
                                        <input
                                            type="number"
                                            value={drawState.numWinners === 0 ? "" : drawState.numWinners}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (val === "") {
                                                    setDrawState(prev => ({ ...prev, numWinners: 0 }));
                                                } else {
                                                    const parsed = parseInt(val);
                                                    if (!isNaN(parsed)) {
                                                        setDrawState(prev => ({ ...prev, numWinners: parsed }));
                                                    }
                                                }
                                            }}
                                            onBlur={() => {
                                                if (!drawState.numWinners || drawState.numWinners <= 0) {
                                                    setDrawState(prev => ({ ...prev, numWinners: 1 }));
                                                }
                                            }}
                                            disabled={drawState.promoStarted}
                                            className="w-full px-3 py-1 bg-white border border-gray-300 text-gray-500  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Dice Section */}
                            <motion.div
                                className="dice-section border p-4 border-gray-200"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="section-header mb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                                    <h3 className="text-sm md:text-base font-medium text-gray-800">Shuffle Rounds</h3>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                                        {/* Toggle between dice and manual input */}
                                        <div className="flex items-center">
                                            <label className="text-xs md:text-sm text-gray-600 flex items-center">
                                                <button
                                                    onClick={toggleRoundsMode}
                                                    className={`w-4 h-4 rounded mr-2 border ${drawState.useManualRounds ? 'bg-yellow-500 border-yellow-600' : 'bg-gray-200 border-gray-300'}`}
                                                    disabled={drawState.promoStarted}
                                                />
                                                Manual rounds
                                            </label>
                                        </div>
                                        <motion.div
                                            className="rounds-display text-xs md:text-sm px-2 py-1 text-yellow-700 rounded-md whitespace-nowrap"
                                            initial={{ scale: 1 }}
                                            animate={drawState.isRolling || drawState.isShuffling ? { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } } : {}}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {drawState.isRolling
                                                ? "Rolling..."
                                                : drawState.isShuffling
                                                    ? `Round ${drawState.currentRound}/${drawState.diceResult}`
                                                    : drawState.diceResult
                                                        ? `${drawState.diceResult} Rounds`
                                                        : "Select rounds"}
                                        </motion.div>
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {drawState.useManualRounds ? (
                                        <motion.div
                                            key="manual"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="mb-4"
                                        >
                                            <label className="block text-xs text-gray-600 mb-1">Number of rounds:</label>
                                            <input
                                                type="text"
                                                value={drawState.manualRounds}
                                                onChange={(e) => handleManualRoundsChange(e.target.value)}
                                                disabled={drawState.promoStarted}
                                                placeholder="Enter number of rounds"
                                                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none"
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="dice"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                        >
                                            <div className="dice-controls mb-4 flex gap-4 items-center">
                                                <div className="dice-count-selector">
                                                    <label className="text-xs md:text-sm text-gray-600 mr-2">Dice:</label>
                                                    <select
                                                        value={drawState.diceCount}
                                                        onChange={(e) => setDrawState(prev => ({ ...prev, diceCount: Number(e.target.value) }))}
                                                        disabled={drawState.promoStarted || drawState.isRolling}
                                                        className="text-xs md:text-sm bg-gray-100 border border-gray-300 text-black rounded px-2 py-1 "
                                                    >
                                                        {[1, 2, 3, 4, 5].map(num => (
                                                            <option key={num} value={num}>{num}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <motion.button
                                                    className="bg-green-500  text-black text-xs md:text-sm py-1 px-3 rounded-md font-medium"
                                                    onClick={rollDice}
                                                    disabled={drawState.promoStarted}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    Roll Dice
                                                </motion.button>
                                            </div>

                                            <MultipleDice
                                                isRolling={drawState.isRolling}
                                                onRollComplete={handleRollComplete}
                                                diceCount={drawState.diceCount}
                                                reset={drawState.resetDice}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>

                        {drawState.verificationCode && drawState.winners.length > 0 && (
                            <motion.div
                                className="mt-4 p-2 sm:p-3 bg-gray-100 rounded-lg border"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-xs sm:text-sm">
                                    <span className="text-gray-600">Verification Code:</span>
                                    <div className="flex items-center gap-2 w-full sm:w-auto">
                                        <code className="font-mono text-yellow-600 break-all">{drawState.verificationCode}</code>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(drawState.verificationCode!);
                                                setDrawState(prev => ({ ...prev, copied: true }));
                                                setTimeout(() => setDrawState(prev => ({ ...prev, copied: false })), 2000);
                                            }}
                                            className="px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300 text-black text-xs whitespace-nowrap"
                                        >
                                            {drawState.copied ? "Copied!" : "Copy"}
                                        </button>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Share this code to verify draw results.</p>
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >

                        {/* Entries text area */}
                        <motion.div
                            className="entries-section flex-grow bg-gray-50 rounded-sm  border border-gray-200"

                        >
                            <div className="section-header mb-3 flex flex-col sm:flex-row justify-between bg-gray-300 pt-2 pb-2 px-3 items-start sm:items-center gap-2 sm:gap-0">
                                <h3 className="text-sm md:text-base font-medium text-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-0">
                                    List of Entries
                                    <span className="text-xs sm:ml-5 text-gray-500">
                                        (add one entry per line up to 20,000 entries)
                                    </span>
                                </h3>
                                {drawState.promoStarted && (
                                    <motion.div
                                        className="entries-count text-xs md:text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md whitespace-nowrap"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        Active: {drawState.shuffledEntries.length}
                                    </motion.div>
                                )}
                            </div>

                            <AnimatePresence mode="wait">
                                {!drawState.promoStarted ? (
                                    <motion.div
                                        key="textarea"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <textarea
                                            value={drawState.entries.join('\n')}
                                            onChange={(e) => handleEntryChange(e.target.value)}
                                            rows={10}
                                            className="w-full px-3 py-2 text-sm  border-gray-300 text-black  bg-white"
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="results"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        {/* Controls for showing iterations and initial entries */}
                                        <div className="flex justify-between items-center gap-2 mb-2 flex-wrap">

                                            <span className="text-bold p-2 text-black">
                                                {drawState.isShuffling ? "Randomizing..." : "Randomized"}
                                            </span>
                                            {drawState.iterationResults.length > 0 && (
                                                <button
                                                    onClick={() => setDrawState(prev => ({ ...prev, showIterationResults: !prev.showIterationResults }))}
                                                    className="text-xs flex items-center gap-1 px-2 py-1 bg-gray-100 rounded border mr-2 border-gray-300 text-black dark:text-black hover:bg-gray-200"
                                                >
                                                    <span className=''>{drawState.showIterationResults ? 'Hide' : 'Show'} Each Round</span>
                                                </button>
                                            )}
                                        </div>



                                        {/* Shuffle Iterations Display */}
                                        <AnimatePresence>
                                            {drawState.showIterationResults && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="overflow-hidden bg-gray-100 p-3 rounded-lg mb-2"
                                                >
                                                    <h3 className="text-sm font-medium text-gray-800 mb-2">Each Round</h3>

                                                    {/* Iteration selector */}
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {drawState.iterationResults.length > 0 && (
                                                            <>
                                                                {/* Always show Initial button */}
                                                                <button
                                                                    key="initial"
                                                                    onClick={() => setDrawState(prev => ({ ...prev, selectedIteration: 0 }))}
                                                                    className={`px-2 py-1 text-black dark:text-black text-xs rounded ${
                                                                        drawState.selectedIteration === 0
                                                                            ? 'bg-yellow-500 text-black font-medium'
                                                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                                    }`}
                                                                >
                                                                    Initial
                                                                </button>
                                                                
                                                                {/* For many rounds, show a limited set with ellipsis */}
                                                                {drawState.iterationResults.length > 12 ? (
                                                                    <>
                                                                        {/* First few rounds */}
                                                                        {drawState.iterationResults.slice(1, 4).map((iter) => (
                                                                            <button
                                                                                key={iter.iteration}
                                                                                onClick={() => setDrawState(prev => ({ ...prev, selectedIteration: iter.iteration }))}
                                                                                className={`px-2 py-1 text-black dark:text-black text-xs rounded ${
                                                                                    drawState.selectedIteration === iter.iteration
                                                                                        ? 'bg-yellow-500 text-black font-medium'
                                                                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                                                }`}
                                                                            >
                                                                                Round {iter.iteration}
                                                                            </button>
                                                                        ))}
                                                                        
                                                                        {/* Ellipsis indicator */}
                                                                        <span className="px-2 py-1 text-gray-500">...</span>
                                                                        
                                                                        {/* Last few rounds */}
                                                                        {drawState.iterationResults.slice(-4).map((iter) => (
                                                                            <button
                                                                                key={iter.iteration}
                                                                                onClick={() => setDrawState(prev => ({ ...prev, selectedIteration: iter.iteration }))}
                                                                                className={`px-2 py-1 text-black dark:text-black text-xs rounded ${
                                                                                    drawState.selectedIteration === iter.iteration
                                                                                        ? 'bg-yellow-500 text-black font-medium'
                                                                                        : iter.iteration === drawState.diceResult
                                                                                            ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 border border-yellow-500'
                                                                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                                                }`}
                                                                            >
                                                                                {iter.iteration === drawState.diceResult 
                                                                                    ? `Final (Round ${iter.iteration})` 
                                                                                    : `Round ${iter.iteration}`}
                                                                            </button>
                                                                        ))}
                                                                    </>
                                                                ) : (
                                                                    /* For fewer rounds, show all rounds */
                                                                    drawState.iterationResults.slice(1).map((iter) => (
                                                                        <button
                                                                            key={iter.iteration}
                                                                            onClick={() => setDrawState(prev => ({ ...prev, selectedIteration: iter.iteration }))}
                                                                            className={`px-2 py-1 text-black dark:text-black text-xs rounded ${
                                                                                drawState.selectedIteration === iter.iteration
                                                                                    ? 'bg-yellow-500 text-black font-medium'
                                                                                    : iter.iteration === drawState.diceResult
                                                                                        ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 border border-yellow-500'
                                                                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                                            }`}
                                                                        >
                                                                            {iter.iteration === drawState.diceResult 
                                                                                ? `Final (Round ${iter.iteration})` 
                                                                                : `Round ${iter.iteration}`}
                                                                        </button>
                                                                    ))
                                                                )}
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* Selected iteration results */}
                                                    {drawState.selectedIteration !== null && (
                                                        <div className="mt-2">
                                                            <EntryTable
                                                                entries={
                                                                    drawState.iterationResults
                                                                        .find(i => i.iteration === drawState.selectedIteration)?.entries
                                                                        .map((entry, index) => ({ id: index + 1, entry })) || []
                                                                }
                                                                winners={drawState.winners}
                                                                title={
                                                                    drawState.selectedIteration === 0
                                                                        ? "Initial Order"
                                                                        : drawState.selectedIteration === drawState.diceResult
                                                                            ? `Final Result (Round ${drawState.selectedIteration})`
                                                                            : `After Round ${drawState.selectedIteration}`
                                                                }
                                                                numWinners={drawState.numWinners}
                                                            />
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Current Results Table */}
                                        <EntryTable
                                            entries={drawState.shuffledEntries.map((entry, index) => ({ id: index + 1, entry }))}
                                            winners={drawState.winners}
                                            title="Final Result"
                                            numWinners={drawState.numWinners}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex flex-col sm:flex-row justify-between min-h-8 bg-gray-200 pt-2 text-gray-500 px-2">
                                <div className='flex flex-wrap items-center gap-4 sm:gap-8 md:gap-16'>
                                    <span className='font-bold pb-1 text-black text-sm sm:text-base'># of Entries: {drawState.promoStarted ? drawState.shuffledEntries.length : validEntriesCount}</span>
                                    <motion.div
                                        className="rounds-display text-xs md:text-sm px-2 py-1 font-bold text-black rounded-md"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {drawState.isRolling
                                            ? "Rolling..."
                                            : drawState.isShuffling
                                                ? `Round ${drawState.currentRound}/${drawState.diceResult}`
                                                : drawState.diceResult
                                                    ? `${drawState.diceResult} Rounds`
                                                    : null}
                                    </motion.div>
                                    {drawState.verificationCode && drawState.winners.length > 0 && (
                                        <motion.div
                                            className="w-full sm:w-auto"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <div className="flex flex-wrap justify-between gap-2 sm:gap-3 items-center text-xs sm:text-sm">
                                                <span className="text-black font-bold">Verification Code:</span>
                                                <div className="flex items-center gap-2">
                                                    <code className="font-mono text-yellow-600 break-all">{drawState.verificationCode}</code>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                                <span className='text-xs mt-2 sm:mt-0'>
                                    {currentTime.toLocaleString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                        hour: 'numeric',
                                        minute: '2-digit',
                                        second: '2-digit',
                                        hour12: true
                                    })}
                                </span>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                    <div className="flex flex-wrap gap-4 md:gap-10 justify-center items-center">
                        <div className="relative">
                            <img src="/start-button.svg" alt="Start Promo" width={160} height={80} className="w-32 md:w-40 lg:w-48" />
                            <div style={{ fontFamily: 'CostaRica' }} onClick={startPromo} className="absolute inset-0 text-black flex items-center justify-center text-sm md:text-lg lg:text-xl font-bold cursor-pointer">
                                Start Promo
                            </div>
                        </div>

                        <div>
                            <img
                                src="/photo.svg"
                                alt="PromoDome Logo"
                                className="w-8 h-6 md:w-12 md:h-8 lg:w-16 lg:h-12"
                            />
                        </div>

                        <motion.button
                            className="shadow-[0_0_0_3px_#ffffff_inset] px-4 md:px-6 py-2 md:py-4 text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 cursor-pointer disabled:opacity-50 disabled:hover:translate-y-0"
                            onClick={cancelPromo}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            <span
                                style={{ fontFamily: 'CostaRica', boxShadow: '0 0 0 3px #fff, 0 0 0 6px #f87171' }}
                                className="relative bg-red-400 py-1 md:py-1.5 px-6 md:px-10 rounded-lg z-10 text-sm md:text-base lg:text-lg font-bold ring-2  ring-offset-1 ring-offset-red-400"
                            >
                                Reset
                            </span>
                        </motion.button>
                    </div>
                </div>

                <AnimatePresence>
                    {drawState.winners.length > 0 && (
                        <motion.div
                            className="winner-display p-6 mt-8 bg-gray-50 border border-yellow-300 rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        >
                            <motion.h2
                                className="text-lg md:text-xl font-semibold text-yellow-600 mb-4"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                            >
                                {drawState.winners.length === 1 ? "Winner:" : `Winners (${drawState.winners.length}):`}
                            </motion.h2>
                            <div className="space-y-3">
                                {drawState.winners.map((winnerEntry, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-3 bg-gray-100 rounded-lg shadow-lg border border-yellow-300"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.3 + (index * 0.2),
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 10
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="text-gray-800 font-medium break-words">
                                                {winnerEntry.replace(/-\d+$/, '')}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                className="text-xs text-gray-500 mt-4 text-right"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 + (drawState.winners.length * 0.2), duration: 0.5 }}
                            >
                                Selected using {drawState.usingQuantum ? "quantum randomness" : "pseudorandom algorithm"}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Add save status notification */}
            <AnimatePresence>
                {drawState.saveStatus && (
                    <motion.div
                        className={`fixed bottom-4 right-4 px-4 py-2 rounded-md ${drawState.saveStatus.includes('Error') ? 'bg-red-200 text-red-800' : drawState.saveStatus.includes('saved') ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        {drawState.saveStatus}
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default Draw;
