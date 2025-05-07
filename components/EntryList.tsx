"use client"

import { motion } from 'framer-motion'

interface EntryListProps {
  entries: string[]
  shuffling: boolean
  winner: string | null
  winners: string[]
}

const EntryList = ({ entries, shuffling, winner, winners }: EntryListProps) => {
  return (
    <div className="h-64 overflow-y-auto bg-gray-800 rounded-md border border-gray-700 p-2">
      {entries.map((entry, index) => {
        const isWinner = winners.includes(entry)
        const rank = winners.indexOf(entry) + 1
        
        return (
          <motion.div
            key={`${entry}-${index}`}
            className={`relative flex items-center my-1 p-2 rounded-md text-sm ${
              isWinner 
                ? 'bg-yellow-900/30 border border-yellow-700/50' 
                : index % 2 === 0 
                  ? 'bg-gray-700/50' 
                  : 'bg-gray-800'
            }`}
            initial={shuffling ? { opacity: 0.5, x: 0 } : { opacity: 1 }}
            animate={
              shuffling
                ? {
                    opacity: [0.5, 1, 0.5],
                    x: [0, 5, -5, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 0.5,
                    },
                  }
                : isWinner
                ? {
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      '0 0 0 rgba(234, 179, 8, 0)',
                      '0 0 10px rgba(234, 179, 8, 0.3)',
                      '0 0 0 rgba(234, 179, 8, 0)',
                    ],
                    transition: {
                      repeat: 3,
                      duration: 1,
                    },
                  }
                : { opacity: 1 }
            }
          >
            <div className="w-5 text-gray-400 mr-2">{index + 1}.</div>
            <div className="flex-grow truncate text-white">{entry}</div>
            
            {isWinner && (
              <motion.div
                className="ml-2 px-2 py-0.5 bg-yellow-900/50 text-yellow-500 rounded-full text-xs font-semibold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                {rank === 1 ? "🏆 Winner" : `#${rank}`}
              </motion.div>
            )}
          </motion.div>
        )
      })}
      
      {entries.length === 0 && (
        <div className="h-full flex items-center justify-center text-gray-500">
          No entries available
        </div>
      )}
    </div>
  )
}

export default EntryList 