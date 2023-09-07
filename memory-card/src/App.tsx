import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import PowerButtons from "./PowerButtons";

function App() {
  const [gameState, setGameState] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleScoreIncrement = () => {
    setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    if (gameState === false && score > highScore) {
      setHighScore(score);
    }
  }, [gameState]);

  const powerOffButton = () => {
    setGameState(false)
  }
  const powerOnButton = () => {
    setGameState(true)
  }

  return (
    <div className="game-board">
      <Scoreboard score={score} highScore={highScore} />
      <div>
        GAME BOARD GOES HERE
      </div>
      <button onClick={handleScoreIncrement}>+</button>
      <PowerButtons on={powerOnButton} off={powerOffButton}/>
    </div>
  );
}

export default App;
