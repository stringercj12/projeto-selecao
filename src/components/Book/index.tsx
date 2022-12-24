import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Ibook } from '../../App'
import './styles.css'

interface Props {
  book: Ibook
}

export function Book({ book }: Props) {
  console.log(book)
  return (
    <div className="book">
      <img src={book?.thumbnail} alt={book?.title} />
      <div className="book-infos">
        <h3 className="title">{book?.title}</h3>
        <p className="subtitle">{book?.subtitle}</p>
        <p>
          {book?.categories?.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <small>{book?.averageRating}</small>
      </div>
    </div>
  )
}
