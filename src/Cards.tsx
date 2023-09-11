import Card from "./Card";

export default function Cards({
  list,
  selectCard
}) {

  return (
    <>
      <ul className="cards">
        {list.map((card:Card, index) => (
          <button className="card" key={index} onClick={() => selectCard(card)}>
            {card.icon}
          </button>
        ))}
      </ul>
    </>
  );
}
