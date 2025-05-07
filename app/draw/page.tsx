"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { multiShuffle } from '@/lib/shuffle'
import MultipleDice from '@/components/MultipleDice'
import EntryList from '@/components/EntryList'
import EntryTable from '@/components/EntryTable'
import { addDraw } from '@/app/actions/addDraw'

const Draw = () => {
    const [promoTitle, setPromoTitle] = useState<string>('')
    const [entries, setEntries] = useState<string[]>([''])
    const [numRounds, setNumRounds] = useState<number>(0)
    const [diceResult, setDiceResult] = useState<number | null>(null)
    const [isRolling, setIsRolling] = useState<boolean>(false)
    const [isShuffling, setIsShuffling] = useState<boolean>(false)
    const [shuffledEntries, setShuffledEntries] = useState<string[]>([])
    const [winner, setWinner] = useState<string | null>(null)
    const [promoStarted, setPromoStarted] = useState<boolean>(false)
    const [diceCount, setDiceCount] = useState<number>(2)
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

    // Calculate valid entries count
    const validEntriesCount = entries.filter(entry => entry.trim()).length

    // Reset shuffled entries when entries change
    useEffect(() => {
        setShuffledEntries(entries.filter(entry => entry.trim()));
    }, [entries]);

    // Helper function to add suffixes to duplicate entries
    const addSuffixesToDuplicates = (entries: string[]): string[] => {
        const filteredEntries = entries.filter(entry => entry.trim());
        if (filteredEntries.length === 0) return [];

        // Track counts of each entry to add appropriate suffixes
        const entryCounts: Record<string, number> = {};

        // Process each entry and add suffixes where needed
        return filteredEntries.map(entry => {
            if (!entryCounts[entry]) {
                entryCounts[entry] = 1;
                return entry; // First occurrence of this entry, no suffix needed
            } else {
                // This is a duplicate, add suffix with counter
                entryCounts[entry]++;
                return `${entry}-${entryCounts[entry]}`;
            }
        });
    };

    const handleEntryChange = (text: string) => {
        const lines = text.split('\n');
        setEntries(lines);

        // Process entries to add suffixes to duplicates
        const processed = addSuffixesToDuplicates(lines);
        setProcessedEntries(processed);

        // Store original entries with their order
        const originalWithOrder = processed.map((entry, index) => ({
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

        // Use processed entries with suffixes for duplicates
        const validEntries = processedEntries.length > 0
            ? processedEntries
            : addSuffixesToDuplicates(entries);

        if (validEntries.length < 2) return;

        // Check if we have enough entries for the number of winners requested
        if (numWinners > validEntries.length) {
            setShuffleError(`Not enough entries (${validEntries.length}) for ${numWinners} winners`);
            return;
        }

        setPromoStarted(true);
        setIsShuffling(true);
        setWinner(null); // Reset winner at start
        setWinners([]); // Reset winners array
        setCurrentRound(0); // Reset current round
        setShuffleError(null);

        // Initialize with valid entries (which now have suffixes for duplicates)
        let currentShuffled = [...validEntries];
        setShuffledEntries(currentShuffled);

        try {
            // Perform shuffling with animation
            for (let i = 0; i < diceResult; i++) {
                setCurrentRound(i + 1);
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Use quantum RNG for shuffling
                currentShuffled = await multiShuffle(currentShuffled, 3);
                setShuffledEntries([...currentShuffled]);
            }
        } catch (error) {
            console.error("Error during shuffle:", error);
            setShuffleError("Error using quantum randomness. Fell back to standard shuffle.");
            setUsingQuantum(false);
        } finally {
            setIsShuffling(false);

            // Set the winners (top entries after shuffling based on numWinners)
            if (currentShuffled.length > 0) {
                if (numWinners === 1) {
                    setWinner(currentShuffled[0]);
                    setWinners([currentShuffled[0]]);
                } else {
                    const selectedWinners = currentShuffled.slice(0, numWinners);
                    setWinners(selectedWinners);
                    setWinner(selectedWinners[0]); // Keep first winner in single winner state for compatibility
                }
            }
            
            // Save the draw results to the database
            if (currentShuffled.length > 0 && promoTitle.trim()) {
                saveDrawToDB(currentShuffled);
            }
        }
    };

    // Function to save draw results to the database
    const saveDrawToDB = async (shuffledResults: string[]) => {
        try {
            setSaveStatus("Saving results...");
            
            // Get winners from the shuffled results
            const winnerEntries = shuffledResults.slice(0, numWinners);
            
            const result = await addDraw({
                promoTitle: promoTitle.trim(),
                entries: shuffledResults,
                numRounds: diceResult || 0,
                shuffleCount: 3,
                usingQuantum,
                winners: winnerEntries
            });
            
            if (result.success) {
                setVerificationCode(result.verificationCode!);
                setSaveStatus("Results saved successfully");
                setTimeout(() => setSaveStatus(null), 3000);
            } else {
                setSaveStatus(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error("Error saving draw:", error);
            setSaveStatus("Failed to save results");
        }
    };

    const cancelPromo = () => {
        setPromoTitle('')
        setEntries([''])
        setNumRounds(0)
        setDiceResult(null)
        setIsRolling(false)
        setIsShuffling(false)
        setShuffledEntries([])
        setWinner(null)
        setWinners([])
        setPromoStarted(false)
        setShuffleError(null)
        setUsingQuantum(true)
        setManualRounds('')
        setShowInitialEntries(false)
        setSaveStatus(null)
        setVerificationCode(null)
        setCopied(false)
    }

    return (
        <div className="min-h-screen w-full flex flex-col bg-black justify-center items-center text-white py-10 md:py-12 lg:py-16 px-4 md:px-8">
            <motion.div
                className="w-full max-w-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="text-center mb-8 md:mb-12">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold cal-sans-regular mb-2"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 120 }}
                    >
                        Promo Dome
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-yellow-600 yellowtail-400"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        Choose your winners randomly with quantum precision
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Left column */}
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <motion.div
                            className="input-group"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        >
                            <label className="block text-sm font-medium text-gray-300 mb-2">Promo Title</label>
                            <input
                                type="text"
                                placeholder="Title of your promotion"
                                value={promoTitle}
                                onChange={(e) => setPromoTitle(e.target.value)}
                                disabled={promoStarted}
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                            />
                        </motion.div>

                        <motion.div
                            className="dice-section bg-gray-900 rounded-xl p-4 border border-gray-800"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="section-header mb-3 flex justify-between items-center">
                                <h3 className="text-sm md:text-base font-medium text-white">Shuffle Rounds</h3>
                                <motion.div
                                    className="rounds-display text-xs md:text-sm px-2 py-1 bg-yellow-900/50 text-yellow-500 rounded-md"
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

                            {/* Toggle between dice and manual input */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs md:text-sm text-gray-300 flex items-center">
                                        <button
                                            onClick={toggleRoundsMode}
                                            className={`w-4 h-4 rounded mr-2 border ${useManualRounds ? 'bg-yellow-600 border-yellow-700' : 'bg-gray-700 border-gray-600'}`}
                                            disabled={promoStarted}
                                        />
                                        Manual rounds
                                    </label>
                                    <div className="text-xs text-gray-400">
                                        {useManualRounds ? "Enter number of rounds" : "Roll dice for rounds"}
                                    </div>
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
                                        <label className="block text-xs text-gray-300 mb-1">Number of rounds:</label>
                                        <input
                                            type="text"
                                            value={manualRounds}
                                            onChange={(e) => handleManualRoundsChange(e.target.value)}
                                            disabled={promoStarted}
                                            placeholder="Enter number of rounds"
                                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
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
                                                <label className="text-xs md:text-sm text-gray-300 mr-2">Dice:</label>
                                                <select
                                                    value={diceCount}
                                                    onChange={(e) => setDiceCount(Number(e.target.value))}
                                                    disabled={promoStarted || isRolling}
                                                    className="text-xs md:text-sm bg-gray-800 border border-gray-700 text-white rounded px-2 py-1 focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                                                >
                                                    {[1, 2, 3, 4, 5].map(num => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <motion.button
                                                className="bg-yellow-600 hover:bg-yellow-700 text-black text-xs md:text-sm py-1 px-3 rounded-md font-medium"
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

                        {/* Winners selector */}
                        <motion.div
                            className="winners-selector bg-gray-900 rounded-xl p-4 border border-gray-800"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-sm md:text-base font-medium text-white mb-3">Winner Settings</h3>
                            <div className="flex items-center gap-2">
                                <label className="text-xs md:text-sm text-gray-300">Number of Winners:</label>
                                <input
                                    type="number"
                                    max="100"
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
                                    className="w-16 text-xs md:text-sm px-2 py-1 bg-gray-800 border border-gray-700 text-white rounded focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                                />
                            </div>
                        </motion.div>

                        {/* Quantum indicator */}
                        <motion.div
                            className="quantum-indicator flex items-center gap-2 text-xs text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <motion.div
                                className={`h-2 w-2 rounded-full ${usingQuantum ? 'bg-yellow-500' : 'bg-red-500'}`}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            ></motion.div>
                            <span>{usingQuantum ? "Using Quantum RNG" : "Using Standard RNG"}</span>
                            {shuffleError && (
                                <motion.span
                                    className="text-red-500 ml-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {shuffleError}
                                </motion.span>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Right column */}
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        {/* Entry count indicator */}
                        <motion.div
                            className="bg-gray-900 rounded-md py-2 px-3 inline-flex items-center justify-center text-center mx-auto"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="font-medium text-gray-300">
                                # of Entries - {promoStarted ? shuffledEntries.length : validEntriesCount}
                            </span>
                        </motion.div>

                        <motion.div
                            className="entries-section flex-grow bg-gray-900 rounded-xl p-4 border border-gray-800"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="section-header mb-3 flex justify-between items-center">
                                <h3 className="text-sm md:text-base font-medium text-white">Entries</h3>
                                {promoStarted && (
                                    <motion.div
                                        className="entries-count text-xs md:text-sm px-2 py-1 bg-yellow-900/50 text-yellow-500 rounded-md"
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
                                            placeholder="Add one entry per line"
                                            value={entries.join('\n')}
                                            onChange={(e) => handleEntryChange(e.target.value)}
                                            rows={10}
                                            className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                                        />

                                        {/* Preview of processed entries */}
                                        {processedEntries.length > 0 && entries.length > 1 && (
                                            <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                                                <div className="font-semibold mb-1 text-gray-300">Preview with duplicates processed:</div>
                                                <div className="max-h-32 overflow-y-auto text-gray-400">
                                                    {processedEntries.map((entry, idx) => (
                                                        <div key={idx}>{entry}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
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
                                        {/* Toggle for showing initial entries */}
                                        <div className="flex justify-end mb-2">
                                            <button
                                                onClick={() => setShowInitialEntries(!showInitialEntries)}
                                                className="text-xs flex items-center gap-1 px-2 py-1 bg-gray-800 rounded border border-gray-700 text-gray-300 hover:bg-gray-700"
                                            >
                                                <span>{showInitialEntries ? 'Hide' : 'Show'} Initial Entries</span>
                                            </button>
                                        </div>

                                        <AnimatePresence>
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
                                        </AnimatePresence>

                                        {/* Current Results Table */}
                                        <EntryTable
                                            entries={shuffledEntries.map((entry, index) => ({ id: index + 1, entry }))}
                                            winners={winners}
                                            title="Results"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-6">
                    <div className="timestamp text-xs text-right mb-4 text-gray-500">
                        {new Date().toLocaleString()}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-4 bg-yellow-600 border border-yellow-600 text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 cursor-pointer disabled:opacity-50 disabled:hover:translate-y-0"
                            onClick={startPromo}
                            disabled={promoStarted || !diceResult || validEntriesCount < 2}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            <span className="relative z-10 text-lg sm:text-xl font-bold">
                                Start Promo
                            </span>
                        </motion.button>

                        <motion.button
                            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-4 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 cursor-pointer disabled:opacity-50 disabled:hover:translate-y-0"
                            onClick={cancelPromo}
                            disabled={!promoStarted}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                        >
                            <span className="relative z-10 text-lg sm:text-xl font-bold">
                                Reset
                            </span>
                        </motion.button>
                    </div>
                </div>

                <AnimatePresence>
                    {winners.length > 0 && (
                        <motion.div
                            className="winner-display p-6 mt-8 bg-gray-900/50 border border-yellow-800/30 rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        >
                            <motion.h2
                                className="text-lg md:text-xl font-semibold text-yellow-500 mb-4"
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
                                        className="p-3 bg-gray-800 rounded-lg shadow-lg border border-yellow-700/30"
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
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-black font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="text-white font-medium break-words">
                                                {winnerEntry}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                className="text-xs text-gray-400 mt-4 text-right"
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
                        className={`fixed bottom-4 right-4 px-4 py-2 rounded-md ${saveStatus.includes('Error') ? 'bg-red-800' : saveStatus.includes('saved') ? 'bg-green-800' : 'bg-yellow-800'} text-white`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        {saveStatus}
                    </motion.div>
                )}
            </AnimatePresence>

            {verificationCode && (
                <motion.div 
                    className="mt-6 p-4 bg-gray-800 rounded-lg border border-yellow-700/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-300">Verification Code:</div>
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-yellow-500">{verificationCode}</span>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(verificationCode);
                                    setCopied(true);
                                    setTimeout(() => setCopied(false), 2000);
                                }}
                                className="p-1 bg-gray-700 rounded hover:bg-gray-600"
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                        Share this code to verify draw results.
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default Draw;
