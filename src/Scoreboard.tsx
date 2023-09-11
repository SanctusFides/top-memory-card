export default function Scoreboard({ score, highScore }) {
  return (
    <div className="score-board">
      <p aria-label="current score">Score: {score}</p>
      <p aria-label="high score">High Score: {highScore}</p>
    </div>
  );
}
