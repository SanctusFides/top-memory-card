import Card from "./Card";

export default function Cards() {
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

  // This is the click handler for the card to change it's consumed state from false to true
  function changeCardState(card) {
    if (card.consumed === true) {
      console.log("Card has already been clicked");
    } else {
      card.setConsumed();
    }
  }

  return (
    <>
      <ul className="cards">
        {shuffledList.map((card) => (
          <button className="card" key={card.icon} onClick={() => changeCardState(card)}>{card.icon}</button>
        ))}
      </ul>
    </>
  );
}
