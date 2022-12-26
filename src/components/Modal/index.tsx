import { Ibook } from '../../App'
import { BookDetails } from '../BookDetails'

import "./styles.css"

interface Props {
  book: Ibook
  active: boolean
  setActiveModal: () => void
}

export function Modal({ book, active = false, setActiveModal }: Props) {
  return (
    <div className={`modal ${active ? 'show' :''}`}>
      <div className="modal-content">
        <span className="close" onClick={setActiveModal}>
          &times;
        </span>
        <BookDetails book={book} />
      </div>
    </div>
  )
}
