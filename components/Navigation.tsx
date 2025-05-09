"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Draw', path: '/draw' },
    { name: 'Results', path: '/results' },
  ]

  const ThemeIcon = () => {
    if (!mounted) return null;
    
    return theme === 'light' ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    )
  }

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-black backdrop-blur-sm border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="flex items-center text-sm sm:text-lg md:text-xl text-red-400 font-bold whitespace-nowrap">
                <img
                  src="/logo.svg"
                  alt="PromoDome Logo"
                  className="w-6 h-5 sm:w-8 sm:h-6 md:w-10 md:h-7 mr-1 sm:mr-2"
                />
                <span style={{ fontFamily: 'ATCtimberlime' }}>PROMO</span>
                <span style={{ fontFamily: 'QuiveraRegular', letterSpacing: '0.1em' }} className="ml-0.5 sm:ml-1">DOME</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {navItems.map(item => {
              const isActive = pathname === item.path

              return (
                <div
                  key={item.path}
                  // href={item.path}
                  onClick={() => {
                    window.location.href = item.path
                  }}
                  className={`px-1.5 cursor-pointer py-1 sm:px-2 sm:py-1.5 md:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${isActive
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
                </div>
              )
            })}
            
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="ml-1 p-1.5 sm:p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <ThemeIcon />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation 