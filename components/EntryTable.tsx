"use client"

import { motion } from 'framer-motion'

interface EntryTableProps {
  entries: { id: number, entry: string }[]
  winners?: string[]
  title: string
}

const EntryTable = ({ entries, winners = [], title }: EntryTableProps) => {
  return (
    <div className="overflow-hidden bg-gray-800 rounded-md border border-gray-700">
      <div className="py-2 px-3 bg-gray-900 border-b border-gray-700">
        <h3 className="text-sm font-medium text-white">{title}</h3>
      </div>
      
      <div className="max-h-64 overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900 sticky top-0">
            <tr>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                #
              </th>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Entry
              </th>
              <th scope="col" className="px-3 py-2 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {entries.map(({ id, entry }) => {
              const isWinner = winners.includes(entry)
              const rank = winners.indexOf(entry) + 1
              
              return (
                <motion.tr 
                  key={`${id}-${entry}`}
                  className={isWinner ? 'bg-yellow-900/20' : ''}
                  whileHover={{ backgroundColor: 'rgba(90, 90, 90, 0.1)' }}
                >
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-400">
                    {id}
                  </td>
                  <td className="px-3 py-2 whitespace-normal break-words text-sm text-white">
                    {entry}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-right">
                    {isWinner && (
                      <motion.span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-900/50 text-yellow-500"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        {rank === 1 ? "Winner 🏆" : `#${rank}`}
                      </motion.span>
                    )}
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EntryTable 