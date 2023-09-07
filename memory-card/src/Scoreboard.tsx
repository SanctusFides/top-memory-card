
export default function Scoreboard({score, highScore}) {

  return (
    <div className="score-board">
      <p>Score: {score}</p>
      <p>
      High Score: {highScore}

      </p>
    </div>
  )
}
