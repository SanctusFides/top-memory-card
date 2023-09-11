import { useMemo } from "react";
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

  // Use memo is neccesary here to preserve the card objects between renders. The big bug I was facing before was  that
  // each time a card was selected by player, it was making a setState call that was re-rendering all the objects and was wiping
  // the consumed property on the card, so no cards were remaining consumed between renders. Memoizing the card list preserves this data
  // Truth be told, the emojilist above can be removed as well and length value be hardcoded but I wanted to keep the future
  // rails intact in case I want to revisit this and add a difficulty selection that lets them select the numnber of cards
  const builtList = useMemo( () => {
    const cardList: Card[] = []
    for (let i = 0; i < emojiList.length; i++) {
      cardList.push(new Card(emojiList[i]))
    }
    return cardList
  }, ["🤬", "🤯", "😳", "🥵", "🥶", "😱"])
  const shuffledList = shuffle(builtList);

  // This is the click handler for the card to change its consumed state from false to true
  const selectCard = (card) => {
    if (card.consumed == true) {
      endGameFunc();
    } else {
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
