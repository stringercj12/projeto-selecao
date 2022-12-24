import './styles.css'
import Lottie from 'lottie-react'
import readingBook from '../../assets/108422-reading-book.json'

interface Props {
  text?: string
}

export function EmptyList({ text }: Props) {
  return (
    <div className="empty-list">
      <Lottie animationData={readingBook} style={{ height: 270 }} />
      {text && <p>{text}</p>}
    </div>
  )
}
