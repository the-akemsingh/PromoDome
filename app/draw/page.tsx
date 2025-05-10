"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { multiShuffle } from '@/lib/shuffle'
import MultipleDice from '@/components/MultipleDice'
import EntryList from '@/components/EntryList'
import EntryTable from '@/components/EntryTable'
import { createDraw, addIteration, addDraw, cancelDraw } from '@/app/actions/addDraw'
import { useTheme } from '@/context/ThemeContext'

const Draw = () => {
    const { theme } = useTheme()
    const [promoTitle, setPromoTitle] = useState<string>('')
    const [entries, setEntries] = useState<string[]>([''])
    const [numRounds, setNumRounds] = useState<number>(0)
    const [diceResult, setDiceResult] = useState<number | null>(null)
    const [isRolling, setIsRolling] = useState<boolean>(false)
    const [isShuffling, setIsShuffling] = useState<boolean>(false)
    const [shuffledEntries, setShuffledEntries] = useState<string[]>([])
    const [winner, setWinner] = useState<string | null>(null)
    const [promoStarted, setPromoStarted] = useState<boolean>(false)
    const [diceCount, setDiceCount] = useState<number>(1)
    const [currentRound, setCurrentRound] = useState<number>(0)
    const [usingQuantum, setUsingQuantum] = useState<boolean>(true)
    const [shuffleError, setShuffleError] = useState<string | null>(null)
    const [numWinners, setNumWinners] = useState<number>(1)
    const [winners, setWinners] = useState<string[]>([])
    const [processedEntries, setProcessedEntries] = useState<string[]>([])
    const [manualRounds, setManualRounds] = useState<string>('')
    const [useManualRounds, setUseManualRounds] = useState<boolean>(false)
    const [originalEntries, setOriginalEntries] = useState<{ id: number, entry: string }[]>([])
    const [showInitialEntries, setShowInitialEntries] = useState<boolean>(false)
    const [saveStatus, setSaveStatus] = useState<string | null>(null)
    const [verificationCode, setVerificationCode] = useState<string | null>(null)
    const [copied, setCopied] = useState<boolean>(false)
    const [iterationResults, setIterationResults] = useState<{ iteration: number, entries: string[] }[]>([])
    const [showIterationResults, setShowIterationResults] = useState<boolean>(false)
    const [selectedIteration, setSelectedIteration] = useState<number | null>(null)
    const [currentDrawId, setCurrentDrawId] = useState<string | null>(null)
    const [savingError, setSavingError] = useState<string | null>(null)
    const drawIdRef = useRef<string | null>(null)

    // Calculate valid entries count
    const validEntriesCount = entries.filter(entry => entry.trim()).length

    // Reset shuffled entries when entries change
    useEffect(() => {
        setShuffledEntries(entries.filter(entry => entry.trim()));
    }, [entries]);

    // Helper function to filter empty entries
    const filterEntries = (entries: string[]): string[] => {
        return entries.filter(entry => entry.trim());
    };

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

    const handleEntryChange = (text: string) => {
        const lines = text.split('\n');
        setEntries(lines);

        // Filter out empty entries
        const filtered = lines.filter(entry => entry.trim());

        // Process duplicates by adding suffixes for internal use
        const { displayEntries, internalEntries } = addSuffixesToDuplicates(filtered);

        // Set processed entries with duplicates handled
        setProcessedEntries(internalEntries);

        // Store original entries with their order (without suffixes)
        const originalWithOrder = displayEntries.map((entry, index) => ({
            id: index + 1,
            entry
        }));
        setOriginalEntries(originalWithOrder);
    };

    const rollDice = () => {
        setIsRolling(true)
        setDiceResult(null)
        setWinner(null)
        setWinners([])
        setShuffleError(null)
    }

    const handleRollComplete = (total: number) => {
        setIsRolling(false)
        setDiceResult(total)
        setNumRounds(total)
    }

    const handleManualRoundsChange = (value: string) => {
        const filteredValue = value.replace(/[^0-9]/g, '');
        setManualRounds(filteredValue);

        if (filteredValue !== '') {
            const rounds = parseInt(filteredValue, 10);
            setDiceResult(rounds);
            setNumRounds(rounds);
        } else {
            setDiceResult(null);
            setNumRounds(0);
        }
    }

    const toggleRoundsMode = () => {
        setUseManualRounds(!useManualRounds);
        if (!useManualRounds) {
            // Switching to manual mode
            setDiceResult(manualRounds !== '' ? parseInt(manualRounds, 10) : null);
        } else {
            // Switching to dice mode
            setDiceResult(null);
            setManualRounds('');
        }
    }

    const startPromo = async () => {
        if (!diceResult || diceResult < 1) return;

        // Use processed entries (which now have suffixes for duplicates)
        const internalEntries = processedEntries.length > 0
            ? processedEntries
            : filterEntries(entries);

        if (internalEntries.length < 2) return;

        // Check if we have enough entries for the number of winners requested
        if (numWinners > internalEntries.length) {
            setShuffleError(`Not enough entries (${internalEntries.length}) for ${numWinners} winners`);
            return;
        }

        // Reset state before starting
        setPromoStarted(true);
        setIsShuffling(true);
        setWinner(null); // Reset winner at start
        setWinners([]); // Reset winners array
        setCurrentRound(0); // Reset current round
        setShuffleError(null);
        setIterationResults([]); // Reset iteration results

        // Initialize with internal entries (which now have suffixes for duplicates)
        let currentShuffled = [...internalEntries];

        // Store mapping of internal entries to display entries
        const entryMapping = new Map<string, string>();
        internalEntries.forEach((entry, index) => {
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
        setShuffledEntries(displayShuffled);

        // Save initial state as iteration 0 (using display entries)
        const initialIteration = {
            iteration: 0,
            entries: [...displayShuffled]
        };
        setIterationResults([initialIteration]);

        // Create draw with display entries (without suffixes)
        let drawId: string;
        try {
            setSaveStatus("Creating draw...");
            const result = await createDraw({
                promoTitle: promoTitle.trim(),
                entries: displayShuffled, // Use display entries for the database
                numRounds: diceResult,
                shuffleCount: 3,
                usingQuantum
            });

            if (!result.success || !result.drawId) {
                setSaveStatus(`Error: ${result.error || "Failed to create draw"}`);
                setSavingError(result.error || "Failed to create draw");
                return;
            }

            // Store the draw ID for use in this function
            drawId = result.drawId;

            // Update state and ref
            console.log("Draw created successfully with ID:", drawId);
            setCurrentDrawId(drawId);
            drawIdRef.current = drawId;
            setVerificationCode(result.verificationCode!);
            setSaveStatus("Draw created, starting shuffling...");
        } catch (error) {
            console.error("Error creating draw:", error);
            setSaveStatus("Failed to create draw");
            return;
        }

        // For debugging
        console.log("Initial iteration (0) set with", displayShuffled.length, "entries");

        // Save the initial iteration to the database using the drawId from above
        try {
            console.log("Saving initial iteration for draw:", drawId);
            const iterResult = await addIteration({
                drawId,
                iteration: 0,
                entries: currentShuffled
            });

            if (iterResult.success) {
                console.log("Initial iteration saved successfully with ID:", iterResult.iterationId);
            } else {
                console.error("Failed to save initial iteration:", iterResult.error);
            }
        } catch (error) {
            console.error("Error saving initial iteration:", error);
        }

        try {
            // Perform shuffling with animation
            for (let i = 0; i < diceResult; i++) {
                setCurrentRound(i + 1);
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Use quantum RNG for shuffling
                currentShuffled = await multiShuffle(currentShuffled, 3);
                setShuffledEntries([...currentShuffled]);

                // Save this iteration result
                const thisIteration = {
                    iteration: i + 1,
                    entries: [...currentShuffled]
                };
                setIterationResults(prev => [...prev, thisIteration]);

                // Save each iteration to the database as it happens
                try {
                    console.log(`Saving iteration ${i + 1} for draw: ${drawId}`);
                    const iterResult = await addIteration({
                        drawId,
                        iteration: i + 1,
                        entries: currentShuffled
                    });

                    if (iterResult.success) {
                        console.log(`Iteration ${i + 1} saved successfully with ID: ${iterResult.iterationId}`);
                    } else {
                        console.error(`Failed to save iteration ${i + 1}:`, iterResult.error);
                    }
                } catch (error) {
                    console.error(`Error saving iteration ${i + 1}:`, error);
                }
            }
        } catch (error) {
            console.error("Error during shuffle:", error);
            setShuffleError("Error using quantum randomness. Fell back to standard shuffle.");
            setUsingQuantum(false);
        } finally {
            // Ensure we set current round to the final round number for UI consistency
            setCurrentRound(diceResult);
            setIsShuffling(false);

            // Set the winners (top entries after shuffling based on numWinners)
            if (currentShuffled.length > 0) {
                if (numWinners === 1) {
                    setWinner(currentShuffled[0]);
                    setWinners([currentShuffled[0]]);
                } else {
                    const selectedWinners = currentShuffled.slice(0, numWinners);
                    setWinners(selectedWinners);
                    setWinner(selectedWinners[0]);
                }

                // Save the winners with suffixes to DB
                if (drawId) {
                    const winnersWithSuffix = currentShuffled.slice(0, numWinners);
                    saveWinnersToDB(drawId, winnersWithSuffix);
                } else {
                    console.error("Cannot save winners: drawId is not available");
                }
            }

            // Auto-select the final iteration for better user experience
            setSelectedIteration(diceResult);
            setShowIterationResults(true);
        }
    };

    // Function to save winners to the database
    const saveWinnersToDB = async (drawId: string, winnerEntries: string[]) => {
        if (!drawId) {
            setSaveStatus("Error: No active draw ID");
            return;
        }

        try {
            setSaveStatus("Saving winners...");

            const result = await addDraw({
                drawId,
                winners: winnerEntries
            });

            if (result.success) {
                setSaveStatus("Results saved successfully");
                setTimeout(() => setSaveStatus(null), 3000);
            } else {
                setSaveStatus(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error("Error saving winners:", error);
            setSaveStatus("Failed to save winners");
        }
    };

    const cancelPromo = async () => {
        // If there's an active draw, cancel it in the database
        if (winners.length === 0) {
            const drawIdValue = drawIdRef.current;
            if (drawIdValue) {
                try {
                    setSaveStatus("Cancelling draw...");
                    await cancelDraw(drawIdValue);
                    setSaveStatus("Draw cancelled");
                    setTimeout(() => setSaveStatus(null), 3000);
                } catch (error) {
                    console.error("Error cancelling draw:", error);
                    setSaveStatus("Failed to cancel draw");
                    setTimeout(() => setSaveStatus(null), 3000);
                }
            }
        }

        // Reset all state
        setPromoTitle('')
        setEntries([''])
        setNumRounds(0)
        setDiceResult(null)
        setDiceCount(1)
        setIsRolling(false)
        setIsShuffling(false)
        setShuffledEntries([])
        setWinner(null)
        setNumWinners(1)
        setWinners([])
        setPromoStarted(false)
        setShuffleError(null)
        setUsingQuantum(true)
        setManualRounds('')
        setShowInitialEntries(false)
        setSaveStatus(null)
        setVerificationCode(null)
        setCopied(false)
        setIterationResults([])
        setShowIterationResults(false)
        setSelectedIteration(null)
        setCurrentDrawId(null)
        drawIdRef.current = null
        setSavingError(null)
    }

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
                                            value={promoTitle}
                                            onChange={(e) => setPromoTitle(e.target.value)}
                                            disabled={promoStarted}
                                            className="w-full px-3 py-1 bg-white border border-gray-300 text-gray-500  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                                        />
                                    </div>
                                </div>
                                <div className="flex max-h-14 lg:min-w-xl items-center  p-2 ">
                                    <div className="font-medium min-w-40 text-black dark:text-black bg-gray-300 py-1 w-24 pl-2">Number of Winners</div>
                                    <div className="flex-grow">
                                        <input
                                            type="number"
                                            value={numWinners === 0 ? "" : numWinners}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (val === "") {
                                                    setNumWinners(0);
                                                } else {
                                                    const parsed = parseInt(val);
                                                    if (!isNaN(parsed)) {
                                                        setNumWinners(parsed);
                                                    }
                                                }
                                            }}
                                            onBlur={() => {
                                                if (!numWinners || numWinners <= 0) {
                                                    setNumWinners(1);
                                                }
                                            }}
                                            disabled={promoStarted}
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
                                                    className={`w-4 h-4 rounded mr-2 border ${useManualRounds ? 'bg-yellow-500 border-yellow-600' : 'bg-gray-200 border-gray-300'}`}
                                                    disabled={promoStarted}
                                                />
                                                Manual rounds
                                            </label>
                                        </div>
                                        <motion.div
                                            className="rounds-display text-xs md:text-sm px-2 py-1 text-yellow-700 rounded-md whitespace-nowrap"
                                            initial={{ scale: 1 }}
                                            animate={isRolling || isShuffling ? { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } } : {}}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {isRolling
                                                ? "Rolling..."
                                                : isShuffling
                                                    ? `Round ${currentRound}/${diceResult}`
                                                    : diceResult
                                                        ? `${diceResult} Rounds`
                                                        : "Select rounds"}
                                        </motion.div>
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {useManualRounds ? (
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
                                                value={manualRounds}
                                                onChange={(e) => handleManualRoundsChange(e.target.value)}
                                                disabled={promoStarted}
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
                                                        value={diceCount}
                                                        onChange={(e) => setDiceCount(Number(e.target.value))}
                                                        disabled={promoStarted || isRolling}
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
                                                    disabled={promoStarted}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    Roll Dice
                                                </motion.button>
                                            </div>

                                            <MultipleDice
                                                isRolling={isRolling}
                                                onRollComplete={handleRollComplete}
                                                diceCount={diceCount}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>

                        {verificationCode && winners.length > 0 && (
                            <motion.div
                                className="mt-6 p-4 bg-gray-100 rounded-lg border "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-600">Verification Code:</div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-yellow-600">{verificationCode}</span>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(verificationCode);
                                                setCopied(true);
                                                setTimeout(() => setCopied(false), 2000);
                                            }}
                                            className="p-1 bg-gray-200 rounded hover:bg-gray-300 text-black dark:text-black"
                                        >
                                            {copied ? "Copied!" : "Copy"}
                                        </button>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    Share this code to verify draw results.
                                </p>
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
                            <div className="section-header mb-3 flex justify-between bg-gray-300 pt-2 pb-2 px-3 items-center">
                                <h3 className="text-sm md:text-base font-medium text-gray-800">List of Entries
                                    <span className="text-xs ml-5 text-gray-500">
                                        (add one entry per line up to 20,000 entries)
                                    </span>
                                </h3>
                                {promoStarted && (
                                    <motion.div
                                        className="entries-count text-xs md:text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        Active: {shuffledEntries.length}
                                    </motion.div>
                                )}
                            </div>

                            <AnimatePresence mode="wait">
                                {!promoStarted ? (
                                    <motion.div
                                        key="textarea"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <textarea
                                            value={entries.join('\n')}
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
                                        <div className="flex justify-end items-center gap-2 mb-2 flex-wrap">
                                            {/* <button
                                                onClick={() => setShowInitialEntries(!showInitialEntries)}
                                                className="text-xs flex items-center gap-1 px-2 py-1 bg-gray-100 rounded border border-gray-300 text-black dark:text-black hover:bg-gray-200"
                                            >
                                                <span>{showInitialEntries ? 'Hide' : 'Show'} Initial Entries</span>
                                            </button> */}

                                            {iterationResults.length > 0 && (
                                                <button
                                                    onClick={() => setShowIterationResults(!showIterationResults)}
                                                    className="text-xs flex items-center gap-1 px-2 py-1 bg-gray-100 rounded border border-gray-300 text-black dark:text-black hover:bg-gray-200"
                                                >
                                                    <span>{showIterationResults ? 'Hide' : 'Show'} Each Round</span>
                                                </button>
                                            )}
                                        </div>

                                        {/* <AnimatePresence>
                                            {showInitialEntries && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <EntryTable
                                                        entries={originalEntries}
                                                        winners={winners}
                                                        title="Initial Entries"
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence> */}

                                        {/* Shuffle Iterations Display */}
                                        <AnimatePresence>
                                            {showIterationResults && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="overflow-hidden bg-gray-100 p-3 rounded-lg mb-2"
                                                >
                                                    <h3 className="text-sm font-medium text-gray-800 mb-2">Each Round</h3>

                                                    {/* Iteration selector */}
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {iterationResults.map((iter) => (
                                                            <button
                                                                key={iter.iteration}
                                                                onClick={() => setSelectedIteration(iter.iteration)}
                                                                className={`px-2 py-1 text-black dark:text-black text-xs rounded ${selectedIteration === iter.iteration
                                                                    ? 'bg-yellow-500 text-black font-medium'
                                                                    : iter.iteration === 0
                                                                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                                        : iter.iteration === diceResult
                                                                            ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 border border-yellow-500'
                                                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                                    }`}
                                                            >
                                                                {iter.iteration === 0
                                                                    ? 'Initial'
                                                                    : iter.iteration === diceResult
                                                                        ? `Final (Round ${iter.iteration})`
                                                                        : `Round ${iter.iteration}`
                                                                }
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {/* Selected iteration results */}
                                                    {selectedIteration !== null && (
                                                        <div className="mt-2">
                                                            <EntryTable
                                                                entries={
                                                                    iterationResults
                                                                        .find(i => i.iteration === selectedIteration)?.entries
                                                                        .map((entry, index) => ({ id: index + 1, entry })) || []
                                                                }
                                                                winners={winners}
                                                                title={
                                                                    selectedIteration === 0
                                                                        ? "Initial Order"
                                                                        : selectedIteration === diceResult
                                                                            ? `Final Result (Round ${selectedIteration})`
                                                                            : `After Round ${selectedIteration}`
                                                                }
                                                                numWinners={numWinners}
                                                            />
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Current Results Table */}
                                        <EntryTable
                                            entries={shuffledEntries.map((entry, index) => ({ id: index + 1, entry }))}
                                            winners={winners}
                                            title="Final Result"
                                            numWinners={numWinners}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex justify-between min-h-8  bg-gray-200 pt-2 text-gray-500 px-2">
                                <div className='flex items-center gap-16'>
                                    <span className='font-bold pb-1 text-black'># of Entries: {promoStarted ? shuffledEntries.length : validEntriesCount}</span>
                                    <motion.div
                                        className="rounds-display text-xs md:text-sm px-2 py-1 font-bold text-black rounded-md"
                                        initial={{ scale: 1 }}
                                        animate={isRolling || isShuffling ? { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } } : {}}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {isRolling
                                            ? "Rolling..."
                                            : isShuffling
                                                ? `Round ${currentRound}/${diceResult}`
                                                : diceResult
                                                    ? `${diceResult} Rounds`
                                                    : null}
                                    </motion.div>
                                </div>
                                <span className='text-xs'>
                                    {new Date().toLocaleString('en-US', {
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
                            <div style={{ fontFamily: 'CostaRica' }} onClick={startPromo} className="absolute inset-0 flex items-center justify-center text-sm md:text-lg lg:text-xl font-bold cursor-pointer">
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
                    {winners.length > 0 && (
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
                                {winners.length === 1 ? "Winner:" : `Winners (${winners.length}):`}
                            </motion.h2>
                            <div className="space-y-3">
                                {winners.map((winnerEntry, index) => (
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
                                transition={{ delay: 0.6 + (winners.length * 0.2), duration: 0.5 }}
                            >
                                Selected using {usingQuantum ? "quantum randomness" : "pseudorandom algorithm"}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Add save status notification */}
            <AnimatePresence>
                {saveStatus && (
                    <motion.div
                        className={`fixed bottom-4 right-4 px-4 py-2 rounded-md ${saveStatus.includes('Error') ? 'bg-red-200 text-red-800' : saveStatus.includes('saved') ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        {saveStatus}
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default Draw;
