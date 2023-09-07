import { useState } from "react"
import Scoreboard from "./Scoreboard"

function App() {

  const [gameState, setGameState] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)


  const handleScoreIncrement = () => {
    setScore((prevScore) => prevScore + 1)
  }

  function saveHighScore(){
    if(gameState === false) {
      setHighScore(score)
    }
  }

  return (
    <div className="game-board">
      <Scoreboard score={score} highScore={highScore} />
      <button onClick={handleScoreIncrement}>+</button>
      <button onClick={saveHighScore}>End Game</button>
    </div>
  )
}

export default App
