"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import prisma from '@/prismaClient'

interface Winner {
  id: string
  rank: number
  entry: { name: string }
}

interface Draw {
  id: string
  numRounds: number
  shuffleCount: number
  usingQuantum: boolean
  createdAt: Date
  promo: { name: string }
  winners: Winner[]
}

const Results = () => {
  const [draws, setDraws] = useState<Draw[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDraws = async () => {
      try {
        const response = await fetch('/api/draws')
        
        if (!response.ok) {
          throw new Error('Failed to fetch draws')
        }
        
        const data = await response.json()
        setDraws(data)
      } catch (err) {
        console.error('Error fetching draws:', err)
        setError('Failed to load results. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchDraws()
  }, [])

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString()
  }

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 md:px-8">
      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 flex justify-between items-center">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold cal-sans-regular"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Draw Results
          </motion.h1>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/draw" className="bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-2 rounded-md font-medium">
              New Draw
            </Link>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-8">{error}</div>
        ) : draws.length === 0 ? (
          <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-lg">No draws have been performed yet.</p>
            <Link 
              href="/draw" 
              className="mt-4 inline-block bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-2 rounded-md font-medium"
            >
              Create Your First Draw
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {draws.map((draw) => (
              <motion.div 
                key={draw.id}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="p-4 md:p-6 border-b border-gray-800 bg-gray-800/50">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold text-yellow-500">
                        {draw.promo.name}
                      </h2>
                      <p className="text-sm text-gray-400 mt-1">
                        Created: {formatDate(draw.createdAt)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                        Rounds: {draw.numRounds}
                      </span>
                      {/* <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                        Shuffles: {draw.shuffleCount}
                      </span> */}
                      <span className={`px-2 py-1 rounded-md text-xs ${draw.usingQuantum ? 'bg-yellow-900/50 text-yellow-500' : 'bg-gray-800 text-gray-400'}`}>
                        {draw.usingQuantum ? 'Quantum' : 'Standard'} RNG
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-medium mb-3">Winners</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-left text-gray-400 border-b border-gray-800">
                        <tr>
                          <th className="px-4 py-2">Rank</th>
                          <th className="px-4 py-2">Entry</th>
                        </tr>
                      </thead>
                      <tbody>
                        {draw.winners
                          .sort((a, b) => a.rank - b.rank)
                          .map((winner) => (
                            <tr key={winner.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                              <td className="px-4 py-3 font-medium">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-600 text-black font-bold">
                                  {winner.rank}
                                </span>
                              </td>
                              <td className="px-4 py-3">{winner.entry.name}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Results
