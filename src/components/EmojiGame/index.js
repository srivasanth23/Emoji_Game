import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    isGameInProgress: true,
    topScore: 0,
    clikedEmojisList: [],
  }

  resetGame = () => {
    this.setState({clikedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clikedEmojisList} = this.state
    const isWon = clikedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clikedEmojisList.length}
      />
    )
  }

  scoreCard = currentScore => {
    const {topScore} = this.state
    let newTopscore = topScore

    if (currentScore > newTopscore) {
      newTopscore = currentScore
    }
    this.setState({topScore: newTopscore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clikedEmojisList} = this.state
    const emojiIncudesOrNot = clikedEmojisList.includes(id)
    const clickedEmojiLength = clikedEmojisList.length

    if (emojiIncudesOrNot) {
      this.scoreCard(clickedEmojiLength)
    } else if (emojisList.length - 1 === clickedEmojiLength) {
      this.scoreCard(emojisList.length)
    }

    this.setState(prevState => ({
      clikedEmojisList: [...prevState.clikedEmojisList, id],
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="unordered-list">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            key={each.id}
            clickEmoji={this.clickEmoji}
            emojiDetails={each}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, topScore, clikedEmojisList} = this.state

    return (
      <div className="app-container">
        <NavBar
          isGameInProgress={isGameInProgress}
          topScore={topScore}
          currentScore={clikedEmojisList.length}
        />
        <div className="card-container">
          {isGameInProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
        <p className="htp-btn">
          How to Play: Click on same emoji twice to lose the game.
        </p>
      </div>
    )
  }
}

export default EmojiGame
