import './styles.css'

interface Props {
  searchBook: (term: string) => void
}

export function Search({ searchBook }: Props) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Qual livro deseja buscar?"
        onChange={(e) => searchBook(e.target.value)}
      />
    </div>
  )
}
