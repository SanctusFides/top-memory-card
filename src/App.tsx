import { useEffect, useState, } from "react";
import Scoreboard from "./Scoreboard";
import PowerButtons from "./PowerButtons";
import Cards from "./Cards";
import Card from "./Card";

function App() {
  const [gameState, setGameState] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // This checks when the game session ends (either by win or loss) and if the current score is higher than highest, set that
  useEffect(() => {
    if (gameState === false && score > highScore) {
      setHighScore(score)
    } else if (score >= 6) {
      setHighScore(score)
      alert("You win! Click restart to try again!")
    }}, [gameState,score]);


  // Function handles adding +1 to the score
  const handleScoreIncrement = () =>{
    setScore((prevScore) => prevScore + 1)
  }

  // Sets the game state to false
  const GameStateOff = () => {
    setGameState(false);
  };
  // Resets the game to being on and sets the scores back to starting 0
  const resetGame = () => {
    setGameState(true);
    setScore(0);
  };

  const gameStateOn = () => {
    setGameState(true);
  };
  
  const emojiList = ["🤬", "🤯", "😳", "🥵", "🥶", "😱"]
  // This function handles randomizing the order of a list
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function makeCards() {
    const newCardList: Card[] = [];
    for (let i = 0; i < emojiList.length; i++) {
      newCardList.push(new Card(emojiList[i]));
    }
    return newCardList
  }

  const gameHand = makeCards()
  const shuffledCards = shuffle(gameHand)

  function selectCard(card: Card) {
    console.log("pew!");
    if (card.consumed == true) {
      GameStateOff();
    } else {
      handleScoreIncrement();
      card.setConsumed();
    }
  }
  return (
    <div
      className="game-board"
      style={{ backgroundColor: gameState ? "green " : "red" }}
    >
      <Scoreboard score={score} highScore={highScore} />
      <Cards list={shuffledCards} selectCard={selectCard} />
      <PowerButtons resetBtn={resetGame} />
      <button onClick={gameStateOn}>State On</button>
      <button onClick={GameStateOff}>State Off</button>
      <button onClick={() => console.log(shuffledCards)}>List</button>
      <button onClick={makeCards}>new hand</button>
    </div>
  );
}

export default App;
