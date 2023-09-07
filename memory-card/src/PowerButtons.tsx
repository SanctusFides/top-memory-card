export default function PowerButtons({on, off}) {


  return (
    <>
      <button onClick={on}>Start Game</button>
      <button onClick={off}>End Game</button>
    </>
  );
}
