import { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Ibook } from '../../App'
import { api } from '../../config/api'
import './styles.css'
interface Props {
  book: Ibook
}

export function BookDetails({ book }: Props) {
  const [addFavorite, setAddFavorite] = useState({} as Ibook)
  async function favorite() {
    const response = await await api.post(
      `mylibrary/bookshelves/0/addVolume?volumeId=${book.id}&key=${process.env.GOOGLE_KEY}`,
    )

    console.log(response.data)

    setAddFavorite(book)
  }
  return (
    <div className="book-details">
      <img src={book?.thumbnail} alt="" />
      <div className="book-info">
        <h3>Título: {book?.title}</h3>

        <button className="favorite" onClick={favorite}>
          {addFavorite ? <AiOutlineStar /> : <AiFillStar />}
        </button>
        <p>
          <strong>Subtitulo:</strong> {book?.subtitle}
        </p>
        <p>
          <strong>Categoria(s):</strong> {book?.categories?.map((item) => item)}
        </p>
        <p>
          <strong>Autor(es):</strong> {book?.authors?.map((item) => item)}
        </p>

        <p>{book?.description}</p>
      </div>
    </div>
  )
}
