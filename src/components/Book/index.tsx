import { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Ibook } from '../../App'
import { Modal } from '../Modal'
import './styles.css'

interface Props {
  book: Ibook
}

export function Book({ book }: Props) {
  const [activeModal, setActiveModal] = useState(false)
  console.log(book)

  function closeModal() {
    setActiveModal(false)
  }
  function openModal() {
    setActiveModal(true)
  }
  return (
    <>
      <div className="book" onClick={openModal}>
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
      <Modal book={book} active={activeModal} setActiveModal={closeModal} />
    </>
  )
}
