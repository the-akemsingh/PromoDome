"use client"

import { motion } from 'framer-motion'

interface EntryTableProps {
  entries: { id: number, entry: string }[]
  winners?: string[]
  title: string
  numWinners: number
}

const EntryTable = ({ entries, winners = [], title, numWinners }: EntryTableProps) => {
  console.log(entries);
  console.log(winners);
  return (
    <div className="overflow-hidden rounded-md border border-gray-700">
      <div className="py-2 px-3 text-black border-b bg-gray-500 border-gray-700">
        <h3 className="text-sm font-medium text-white">{title}</h3>
      </div>

      <div className="max-h-64 overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="sticky top-0">
            <tr>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-black bg-gray-300 uppercase tracking-wider">
                #
              </th>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-black bg-gray-300 uppercase tracking-wider">
                Entry
              </th>
              <th scope="col" className="px-3 py-2 text-right text-xs font-medium text-black bg-gray-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="">
            {entries.map(({ id, entry }) => {
              const isWinner = winners.includes(entry)
              const rank = winners.indexOf((entry)) + 1

              return (
                <motion.tr
                  key={`${id}-${entry}`}
                  // className={isWinner ? 'bg-white' : ''}
                  whileHover={{ backgroundColor: 'rgba(90, 90, 90, 0.1)' }}
                >
                  <td className="px-3 py-2 whitespace-nowrap text-black dark:text-black text-sm ">
                    {id}
                  </td>
                  <td className="px-3 py-2 whitespace-normal break-words dark:text-black text-black text-sm ">
                    {entry.replace(/-\d+$/, '')}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-right text-black">
                    {isWinner && (
                      <motion.span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium  text-yellow-700"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        {rank <= numWinners && title.includes('Final Result') ? "Winner 🏆" : null}
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