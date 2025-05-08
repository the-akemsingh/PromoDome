"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Draw', path: '/draw' },
    { name: 'Results', path: '/results' },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-black backdrop-blur-sm border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text- md:text-2xl flex text-white font-bold cal-sans-regular">
                <img
                  src="/logo.svg"
                  alt="PromoDome Logo"
                  className="w-12 h-8 md:w-16 md:h-10 mr-2"
                />
                Promo<span className="text-yellow-600">Dome</span>
              </span>
            </Link>
          </div>

          <div className="flex space-x-4">
            {navItems.map(item => {
              const isActive = pathname === item.path

              return (
                <span
                  key={item.path}
                  onClick={() => window.location.href = item.path}
                  className={`px-2 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                      ? 'text-yellow-500 bg-gray-900'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                >
                  <span className="relative">
                    {item.name}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-yellow-600"
                        layoutId="navbar-underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </span>
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation 