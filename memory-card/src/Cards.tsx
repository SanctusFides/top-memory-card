import Card from "./Card";

export default function Cards() {
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

  const emojiList = ["🤬", "🤯", "😳", "🥵", "🥶", "😱"];
  const cardList = shuffle(emojiList);

  return (
    <>
      <ul className="cards">
        {cardList.map((card) => (
          <Card key="card" icon={card}/>
        ))}
      </ul>
    </>
  );
}
