import Card from "./Card";

export default function Cards({endGameFunc, handleScoreIncrement}) {
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

  // Emoji list is just 1 of 3 arrays of different lengths to increase the difficulty
  // Player selects which difficulty (which array) and is then feed into a build list of card objects with icon and consumed(t/f)
  // Then the cards are run through the shuffler to randomize them and then they are displayed on the page
  const emojiList = ["🤬", "🤯", "😳", "🥵", "🥶", "😱"];
  const builtList: Card[] = []
  for (let i = 0; i < emojiList.length; i++) {
    builtList.push(new Card(emojiList[i]))
  }
  const shuffledList = shuffle(builtList);

  // This is the click handler for the card to change its consumed state from false to true
  const selectCard = (card) => {
    console.log(card.consumed)
    
    if (card.consumed == true) {
      endGameFunc();
    } else {
      console.log("!");
      handleScoreIncrement();
      card.setConsumed();
    }
  }

  return (
    <>
      <ul className="cards">
        {shuffledList.map((card, index) => (
          <button className="card" key={index} onClick={() => selectCard(card)}>{card.icon}</button>
        ))}
      </ul>
    </>
  );
}
