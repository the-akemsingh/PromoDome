"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import prisma from '@/prismaClient'

interface Winner {
    id: string
    rank: number
    entry: { name: string }
}

interface ShuffleIteration {
    id: string
    iteration: number
    entries: string[]
}

interface Draw {
    id: string
    numRounds: number
    shuffleCount: number
    usingQuantum: boolean
    createdAt: Date
    verificationCode: string
    promo: {
        name: string
        isReset?: boolean
    }
    winners: Winner[]
    iterations: ShuffleIteration[]
}

const Results = () => {
    const [draws, setDraws] = useState<Draw[]>([])
    const [filteredDraws, setFilteredDraws] = useState<Draw[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [copied, setCopied] = useState<string | null>(null)
    const [expandedDraw, setExpandedDraw] = useState<string | null>(null)
    const [selectedIteration, setSelectedIteration] = useState<{ drawId: string, iteration: number } | null>(null)
    const [isResultsOpen, setIsResultsOpen] = useState(false)

    useEffect(() => {
        const fetchDraws = async () => {
            try {
                const response = await fetch('/api/draws')

                if (!response.ok) {
                    throw new Error('Failed to fetch draws')
                }

                const data = await response.json()
                setDraws(data)
                setFilteredDraws(data)
                console.log(data)

                // Auto-expand all draws that have iterations
                if (data.length > 0) {
                    // setExpandedDraw(data[0].id) // Expand the first draw by default

                    // Auto-select first iteration for first draw
                    if (data[0].iterations && data[0].iterations.length > 0) {
                        const firstIteration = [...data[0].iterations]
                            .sort((a, b) => a.iteration - b.iteration)[0]
                        setSelectedIteration({
                            drawId: data[0].id,
                            iteration: firstIteration.iteration
                        })
                    }
                }
            } catch (err) {
                console.error('Error fetching draws:', err)
                setError('Failed to load results. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchDraws()
    }, [])

    useEffect(() => {
        if (searchTerm) {
            const filtered = draws.filter(draw =>
                draw.verificationCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                draw.promo.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredDraws(filtered)
        } else {
            setFilteredDraws(draws)
        }
    }, [searchTerm, draws])

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleString()
    }

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code)
        setCopied(code)
        setTimeout(() => setCopied(null), 2000)
    }

    const toggleDrawExpansion = (drawId: string) => {
        if (expandedDraw === drawId) {
            setExpandedDraw(null)
            setSelectedIteration(null)
        } else {
            setExpandedDraw(drawId)

            // Automatically select the first iteration (initial state)
            const draw = draws.find(d => d.id === drawId)
            if (draw && draw.iterations && draw.iterations.length > 0) {
                // Find the iteration with the lowest iteration number
                const firstIteration = [...draw.iterations].sort((a, b) => a.iteration - b.iteration)[0]
                setSelectedIteration({ drawId, iteration: firstIteration.iteration })
            } else {
                setSelectedIteration(null)
            }
        }
    }

    const viewIteration = (drawId: string, iteration: number) => {
        setSelectedIteration({ drawId, iteration })
    }

    return (
        <div className="min-h-screen bg-white text-gray-800 py-4 px-3 md:px-6">
            <motion.div
                className="w-full max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-2">
                    <motion.h1
                        className="text-2xl md:text-3xl font-bold cal-sans-regular"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Draw Results
                    </motion.h1>

                    <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                        <motion.div
                            className="relative w-full md:w-60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search by code or name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-2 py-1.5 w-full bg-gray-100 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 text-sm"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <Link href="/draw" className="inline-block w-full md:w-auto text-center bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-md font-medium text-sm">
                                New Draw
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-yellow-500"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center py-6">{error}</div>
                ) : filteredDraws.length === 0 ? (
                    <div className="text-center py-8 bg-gray-100 rounded-xl border border-gray-200">
                        {searchTerm ? (
                            <p className="text-gray-600">No draws found matching "{searchTerm}"</p>
                        ) : (
                            <>
                                <p className="text-gray-600">No draws have been performed yet.</p>
                                <Link
                                    href="/draw"
                                    className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-md font-medium text-sm"
                                >
                                    Create Your First Draw
                                </Link>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredDraws.map((draw) => (
                            <motion.div
                                key={draw.id}
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="p-3 border-b border-gray-200 bg-gray-50">
                                    <div className="flex flex-col md:flex-row justify-between gap-2">
                                        <div>
                                            <h2 className="text-lg font-semibold text-yellow-600">
                                                {draw.promo.name}
                                            </h2>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                Created: {formatDate(draw.createdAt)}
                                            </p>

                                            {/* Verification Code - Compact */}
                                            {draw.verificationCode && (
                                                <div className="mt-1 flex items-center gap-1 flex-wrap">
                                                    <span className="text-xs text-gray-500">Verification:</span>
                                                    <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono text-yellow-600">
                                                        {draw.verificationCode}
                                                    </code>
                                                    <button
                                                        onClick={() => handleCopy(draw.verificationCode)}
                                                        className="text-xs px-1.5 py-0.5 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
                                                    >
                                                        {copied === draw.verificationCode ? "Copied!" : "Copy"}
                                                    </button>
                                                </div>
                                            )}
                                            <div>
                                                <button className='cursor-pointer mt-4 text-xs text-gray-500 border border-gray-300 rounded-md px-2 py-1' onClick={() =>{
                                                    setIsResultsOpen(!isResultsOpen)
                                                }}> {  isResultsOpen ? 'Hide' : 'Show' } Results </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1 items-center mt-1 md:mt-0">
                                            <span className="px-1.5 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
                                                Rounds: {draw.numRounds}
                                            </span>
                                            <span className="px-1.5 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
                                                Winners: {draw.winners.length}
                                            </span>
                                            <span className={`px-1.5 py-0.5 rounded text-xs ${draw.usingQuantum ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                                                {draw.usingQuantum ? 'Quantum' : 'Standard'}
                                            </span>

                                            {/* Toggle button */}
                                            {draw.iterations && draw.iterations.length > 0 && (
                                                <motion.button
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => toggleDrawExpansion(draw.id)}
                                                    className={`px-1.5 py-0.5 rounded text-xs border ${
                                                        expandedDraw === draw.id
                                                            ? 'bg-yellow-500 border-yellow-600 text-white font-medium'
                                                            : 'border-yellow-400 bg-transparent text-yellow-600 hover:bg-yellow-50'
                                                    }`}
                                                >
                                                    {expandedDraw === draw.id ? 'Hide' : 'Show Rounds'}
                                                </motion.button>
                                            )}
                                        </div>
                                    </div>
                                </div>



                                {isResultsOpen && 
                                <div className="p-3">
                                    {/* Combined Header and Rounds */}
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-base font-medium text-gray-800">Results</h3>
                                            {draw.iterations && draw.iterations.length > 0 && (
                                                <select
                                                    value={selectedIteration?.iteration ?? ""}
                                                    onChange={(e) => {
                                                        if (e.target.value === "") return;
                                                        viewIteration(draw.id, parseInt(e.target.value));
                                                        setExpandedDraw(draw.id);
                                                    }}
                                                    className="px-2 py-1 text-xs rounded border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                                >
                                                    <option value="" disabled>Select round</option>
                                                    {draw.iterations
                                                        .sort((a, b) => a.iteration - b.iteration)
                                                        .map((iter) => (
                                                            <option key={iter.id} value={iter.iteration}>
                                                                {iter.iteration === 0
                                                                    ? 'Initial'
                                                                    : iter.iteration === draw.numRounds
                                                                        ? `Final (${iter.iteration})`
                                                                        : `Round ${iter.iteration}`}
                                                            </option>
                                                        ))}
                                                </select>
                                            )}
                                        </div>
                                    </div>

                                    {/* Shuffle details - simplified and more compact */}
                                    <AnimatePresence>
                                        {expandedDraw === draw.id && selectedIteration?.drawId === draw.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="mb-3 overflow-hidden bg-gray-50 rounded-lg border border-gray-200 text-sm"
                                            >
                                                <div className="p-2 border-b border-gray-200 bg-gray-100 flex justify-between items-center">
                                                    <h5 className="text-xs font-medium text-gray-800 flex items-center gap-1">
                                                        {selectedIteration.iteration === 0 ? (
                                                            <>
                                                                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-300 text-gray-700 text-xs">0</span>
                                                                Initial Order
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-yellow-500 text-white text-xs font-bold">{selectedIteration.iteration}</span>
                                                                Round {selectedIteration.iteration}
                                                            </>
                                                        )}
                                                    </h5>
                                                    {selectedIteration.iteration === draw.numRounds && (
                                                        <span className="text-xs px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded font-medium">Final</span>
                                                    )}
                                                </div>

                                                <div className="overflow-auto max-h-40">
                                                    <table className="w-full text-xs">
                                                        <thead className="bg-gray-50 sticky top-0">
                                                            <tr>
                                                                <th className="px-2 py-1 text-left font-medium text-gray-600">#</th>
                                                                <th className="px-2 py-1 text-left font-medium text-gray-600">Entry</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {draw.iterations
                                                                .find(i => i.iteration === selectedIteration.iteration)
                                                                ?.entries.map((entry, index) => {
                                                                    const isWinner = draw.winners.some(w => w.entry.name === entry);
                                                                    const isPotentialWinner = index < draw.winners.length;
                                                                    return (
                                                                        <tr key={index} className={`border-b border-gray-100 
                                                                            ${isWinner ? 'bg-yellow-50' : isPotentialWinner ? 'bg-yellow-50/30' : 'hover:bg-gray-50'}`}>
                                                                            <td className="px-2 py-1 font-mono text-gray-500">{index + 1}</td>
                                                                            <td className="px-2 py-1">
                                                                                <span className={isWinner ? 'text-yellow-600 font-medium' : ''}>
                                                                                    {entry.replace(/-\d+$/, '')}
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Winners table - compact */}
                                    <h3 className="text-base font-medium mb-2 text-gray-800">Winners</h3>
                                    <div className="overflow-x-auto border border-gray-200 rounded-lg">
                                        <table className="w-full text-xs">
                                            <thead className="text-left text-gray-600 bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th className="px-2 py-1.5">#</th>
                                                    <th className="px-2 py-1.5">Entry</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {draw.winners
                                                    .sort((a, b) => a.rank - b.rank)
                                                    .map((winner) => (
                                                        <tr key={winner.id} className="border-b border-gray-200 hover:bg-gray-50">
                                                            <td className="px-2 py-1.5">
                                                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-500 text-white font-bold text-xs">
                                                                    {winner.rank}
                                                                </span>
                                                            </td>
                                                            <td className="px-2 py-1.5">{winner.entry.name}</td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                }

                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    )
}

export default Results
