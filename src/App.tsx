import { useEffect, useState } from 'react'
import './app.css'
import { Book } from './components/Book'
import { Search } from './components/Search'
import { api } from './config/api'
import { EmptyList } from './components/EmptyList'

interface IBookResponse {
  items: [
    {
      id: string
      etag: string
      selfLink: string
      volumeInfo: {
        title: string
        subtitle: string
        authors: string[]
        publisher: string
        publishedDate: string
        description: string
        averageRating: number
        categories: string[]
        imageLinks: {
          smallThumbnail: string
          thumbnail: string
        }
      }
    },
  ]
}

export interface Ibook {
  id: string
  title: string
  subtitle: string
  authors: string[]
  description: string
  thumbnail: string
  averageRating: number
  categories: string[]
}

export function App() {
  const [books, setBooks] = useState<Ibook[]>([])

  async function list() {
    const { data } = await api.get(
      `/volumes?q=flowers+inauthor:keyes&key=${process.env.GOOGLE_KEY}`,
    )
    setBooks(data)
  }

  async function searchBook(term: string) {
    const response = await api.get<IBookResponse>(
      `volumes?q=${term}&projection=full`,
    )
    const data: Ibook[] = []
    response.data.items.map((item) => {
      data.push({
        id: item.id,
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        thumbnail: item.volumeInfo.imageLinks.thumbnail,
        averageRating: item.volumeInfo.averageRating,
        categories: item.volumeInfo.categories,
      })
    })

    setBooks(data)
  }

  useEffect(() => {
    list()
  }, [books])

  return (
    <div className="wrapper">
      <Search searchBook={searchBook} />
      <main>
        {books.length > 0 && (
          <div className="books">
            {books.map((item) => {
              return <Book key={item.id} book={item} />
            })}
          </div>
        )}

        {books.length === 0 && <EmptyList text="Nenhum livro localizado" />}
      </main>
    </div>
  )
}
