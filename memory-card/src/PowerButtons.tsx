export default function PowerButtons({resetBtn, powerOffBtn}) {


  return (
    <div className="power-btns">
      <button onClick={resetBtn} aria-label="Reset button that resets the game and scores">Restart Game</button>
      <button onClick={powerOffBtn}>End Game</button>
    </div>
  );
}
