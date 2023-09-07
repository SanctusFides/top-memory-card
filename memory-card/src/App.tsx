import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import PowerButtons from "./PowerButtons";

function App() {
  const [gameState, setGameState] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(5);

  // This checks when the game session ends (either by win or loss) and if the current score is higher than highest, set that
  useEffect(() => {
    if (gameState === false && score > highScore) {
      setHighScore(score);
    }}, [gameState]);

  // Function handles adding +1 to the score
  const handleScoreIncrement = () => {
    setScore((prevScore) => prevScore + 1);
  };

  // Sets the game state to false
  const powerOffButton = () => {
    setGameState(false)
  }
  // Resets the game to being on and sets the scores back to starting 0
  const resetGame = () => {
    setGameState(true)
    setScore(0)
    setHighScore(0)
  }

  return (
    <div className="game-board">
      <Scoreboard score={score} highScore={highScore} />
      <div>
        GAME BOARD GOES HERE
      </div>
      <button onClick={handleScoreIncrement}>Simulate 1 Point</button>
      <PowerButtons resetBtn={resetGame} powerOffBtn={powerOffButton}/>
    </div>
  );
}

export default App;
