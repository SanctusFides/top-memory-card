import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import PowerButtons from "./PowerButtons";
import Cards from "./Cards";

function App() {
  const [gameState, setGameState] = useState(true);
  const [score, setScore] = useState(0);

  // I THINK THAT THE USEREF MAY BE THE WRONG CALL AFTER ALL HERE. WITHOUT IT, THE PAGE UPDATES A STEP BEHIND
  // const highScore = useRef(0);

  const [highScore, setHighScore] = useState(0)

  // This checks when the game session ends (either by win or loss) and if the current score is higher than highest, set that
  useEffect(() => {
    if (gameState === false && score > highScore) {
      setHighScore(score)
    } else if (score >= 6) {
      setHighScore(score)
      alert("You win! Click restart to try again!")
    }}, [gameState,score]);

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
    <div className="game-board" style={{backgroundColor: gameState ? "white ": "red"}}>
      <Scoreboard score={score} highScore={highScore} />
      <Cards endGameFunc={powerOffButton} handleScoreIncrement={handleScoreIncrement}/>
      <PowerButtons resetBtn={resetGame} />
    </div>
  );
}

export default App;
