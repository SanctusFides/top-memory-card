export default function PowerButtons({resetBtn, powerOffBtn}) {


  return (
    <div className="power-btns">
      <button onClick={resetBtn}>Restart Game</button>
      <button onClick={powerOffBtn}>End Game</button>
    </div>
  );
}
