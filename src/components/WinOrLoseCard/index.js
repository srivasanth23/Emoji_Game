// Write your code here.
import './index.css'

const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props

  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="second-card-conatiner">
      <div className="details-conatiner">
        <h1 className="heading"> {gameStatus} </h1>
        <p className="score-para"> {scoreLabel} </p>
        <p className="para"> {score}/12</p>
        <button type="button" onClick={onClickPlayAgain} className="button">
          Play Again
        </button>
      </div>
      <img src={imageUrl} className="won-or-lose-image" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
