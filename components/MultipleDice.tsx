"use client"

import { useState, useEffect } from 'react'

interface MultipleDiceProps {
  isRolling: boolean
  onRollComplete: (total: number) => void
  diceCount: number
  reset?: boolean
}

const MultipleDice = ({ isRolling, onRollComplete, diceCount, reset }: MultipleDiceProps) => {
  // Initialize with placeholder values (1 to diceCount) to ensure dice are visible initially
  const [diceValues, setDiceValues] = useState<number[]>(() =>
    Array(diceCount).fill(0).map((_, i) => i % 6 + 1)
  )
  const [total, setTotal] = useState<number>(0)
  const [useDebug, setUseDebug] = useState<boolean>(true) // Start with debug mode on
  const [use2D, setUse2D] = useState<boolean>(false) // Option to use simple 2D dice

  // Update dice array when diceCount changes or reset is triggered
  useEffect(() => {
    // Initialize all dice to show face value 1
    const initialValues = Array(diceCount).fill(1)
    setDiceValues(initialValues)
    setTotal(diceCount) // Set total to match the number of dice (since each shows 1)
  }, [diceCount, reset]) // Add reset to dependencies

  // Generate random dice values when isRolling changes
  useEffect(() => {
    if (isRolling) {
      // Pre-generate all dice results
      const newResults = Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1)

      // Set a single timeout to complete all dice at once
      const rollTimeout = setTimeout(() => {
        setDiceValues(newResults)
        const newTotal = newResults.reduce((sum, val) => sum + val, 0)
        setTotal(newTotal)
        onRollComplete(newTotal)
      }, 2000) // 2 second roll duration

      return () => {
        clearTimeout(rollTimeout)
      }
    }
  }, [isRolling, diceCount, onRollComplete])

  // Function to render the dots based on the face value
  const renderDots = (faceValue: number) => {
    switch (faceValue) {
      case 1:
        return <div className="dot center"></div>
      case 2:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot bottom-right"></div>
          </>
        )
      case 3:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot center"></div>
            <div className="dot bottom-right"></div>
          </>
        )
      case 4:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        )
      case 5:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot center"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        )
      case 6:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot middle-left"></div>
            <div className="dot middle-right"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        )
      default:
        return <div className="dot center"></div>
    }
  }

  // Render 2D dice with Unicode characters as fallback
  const render2DDice = (value: number) => {
    const diceUnicode = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
    return (
      <div className="w-16 h-16 bg-gray-800 border-2  rounded-lg flex items-center justify-center text-4xl text-yellow-500">
        {diceUnicode[value - 1] || '?'}
      </div>
    )
  }


  return (
    <div className="dice-container" style={{ border: '1px solid gray', minHeight: '100px', padding: '20px' }}>
      {/* Debug controls */}
      {/* <div className="flex gap-2 mb-4">
        <button 
          onClick={() => setUseDebug(!useDebug)}
          className="text-xs px-2 py-1 bg-gray-800 text-white rounded"
        >
          {useDebug ? "Disable" : "Enable"} Debug Mode
        </button>
        
        <button 
          onClick={() => setUse2D(!use2D)}
          className="text-xs px-2 py-1 bg-gray-800 text-white rounded"
        >
          Use {use2D ? "3D" : "2D"} Dice
        </button>
      </div> */}

      {/* 2D Simple Dice */}
      {use2D ? (
        <div className="flex gap-4 justify-center flex-wrap my-2">
          {diceValues.map((value, index) => (
            <div key={index} className={isRolling ? "animate-spin" : ""}>
              {render2DDice(value)}
            </div>
          ))}
        </div>
      ) : (
        /* 3D Dice */
        <div className="flex gap-4 justify-center flex-wrap">
          {diceValues.map((value, index) => (
            <div
              key={index}
              className={`dice ${useDebug ? 'debug-dice' : ''} ${isRolling ? 'rolling' : ''} ${!isRolling && value ? `result-${value}` : ''}`}
            >
              <div
                className="cube"
                style={isRolling && !useDebug ? { animation: 'roll3d 1.5s linear infinite' } : {}}
              >
                {/* Assign face values based on standard die layout */}
                <div className="dice-face front">{renderDots(1)}</div>
                <div className="dice-face back">{renderDots(6)}</div>
                <div className="dice-face top">{renderDots(3)}</div>
                <div className="dice-face bottom">{renderDots(4)}</div>
                <div className="dice-face right">{renderDots(2)}</div>
                <div className="dice-face left">{renderDots(5)}</div>
              </div>
              {isRolling && !useDebug && <div className="dice-shadow"></div>}
            </div>
          ))}
        </div>
      )}

      {/* Debug info visible on the page */}
      {/* <div className="text-xs text-yellow-500 mt-4">
        Dice count: {diceCount} | Values: {diceValues.join(', ')} | Debug mode: {useDebug ? "ON" : "OFF"} | Mode: {use2D ? "2D" : "3D"}
      </div> */}
    </div>
  )
}

export default MultipleDice 