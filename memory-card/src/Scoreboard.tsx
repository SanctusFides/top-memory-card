import React, { useEffect } from 'react'

export default function Scoreboard({score, highScore}) {

  return (
    <div className="score-board">
      Score: {score} 
      High Score: {highScore}
    </div>
  )
}
