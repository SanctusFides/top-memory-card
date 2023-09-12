import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import PowerButtons from "./PowerButtons";
import Cards from "./Cards";
import Card from "./Card";

function App() {
  const [gameState, setGameState] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Providing a little easter egg message to anyone who visits and snoops in devtools
  console.log(
    "Hello and welcome. Please enjoy yourself with this EXTREMELY simple game. Please note though, my focus in the course is not front end design, only need the JS/React logic. This is page is intentionally left ugly."
  );

  // This checks when the game session ends (either by win or loss) and if the current score is higher than highest, set that
  useEffect(() => {
    if (gameState === false && score > highScore) {
      setHighScore(score);
    } else if (score >= 6) {
      setHighScore(score);
      alert("You win! Click restart to try again!");
    }
  }, [gameState, score]);

  // Function handles adding +1 to the score
  const handleScoreIncrement = () => {
    setScore((prevScore) => prevScore + 1);
  };

  // Sets the game state to false
  const GameStateOff = () => {
    setGameState(false);
  };
  // Resets the game to being on and sets the scores back to starting 0
  // The setcards to makecards resets the hand to set the consumed properties back to false
  const resetGame = () => {
    setGameState(true);
    setScore(0);
    setCards(makeCards());
  };

  const emojiList = ["🤬", "🤯", "😳", "🥵", "🥶", "😱"];
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

  // This function is responsible for taking in the array of emojis and creating card objects out of it
  // In theory, this functionality allows the user to select a difficulty which can add in more
  function makeCards() {
    const newCardList: Card[] = [];
    for (let i = 0; i < emojiList.length; i++) {
      newCardList.push(new Card(emojiList[i]));
    }
    return newCardList;
  }

  // This was the trickiest part of it all, getting a persisting set of cards - as before this was stored like this
  // I had an endless headache of the card objects being recreated each render, which was wiping the consumed status of the card
  // Now this will run on the first load, make the hand and save the hand in state form to retain their info between renders
  const [persistedCards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    const gameHand = makeCards();
    setCards(gameHand);
  }, []);
  const shuffledCards = shuffle(persistedCards);

  // Simple function to check if the selected hard has been already consumed, if not then add a point and set it consumed
  function selectCard(card: Card) {
    if (card.consumed == true) {
      GameStateOff();
    } else {
      handleScoreIncrement();
      card.setConsumed();
    }
  }

  // Set a simple background change to red when the player loses. This was used in testing but I've left it in
  return (
    <div
      className="game-board"
      style={{ backgroundColor: gameState ? "white " : "red" }}
    >
      <Scoreboard score={score} highScore={highScore} />
      <Cards list={shuffledCards} selectCard={selectCard} />
      <PowerButtons resetBtn={resetGame} />
    </div>
  );
}

export default App;
