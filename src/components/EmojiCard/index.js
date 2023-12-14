// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {clickEmoji, emojiDetails} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button className="btn" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-resizer" />
      </button>
    </li>
  )
}

export default EmojiCard
