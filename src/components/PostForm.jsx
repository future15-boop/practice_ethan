import { useState } from 'react'
import { BOARDS } from '../data/seed'
import './PostForm.css'

const WRITABLE = BOARDS.filter((b) => b.key !== 'all')

export default function PostForm({ defaultBoard, onSubmit, onCancel }) {
  const [board, setBoard] = useState(defaultBoard || 'free')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const isQna = board === 'qna'

  const submit = (e) => {
    e.preventDefault()
    if (title.trim() === '' || content.trim() === '') {
      setError('제목과 내용을 모두 입력해주세요.')
      return
    }
    onSubmit({ board, title, content, author })
  }

  return (
    <section className="form">
      <p className="eyebrow">{isQna ? 'Ask' : 'Write'}</p>
      <h2 className="form__title">{isQna ? '질문하기' : '글쓰기'}</h2>

      <form onSubmit={submit} className="form__body">
        <div className="form__field">
          <label className="form__label" htmlFor="f-board">게시판</label>
          <select
            id="f-board"
            className="form__input"
            value={board}
            onChange={(e) => setBoard(e.target.value)}
          >
            {WRITABLE.map((b) => (
              <option key={b.key} value={b.key}>{b.label}</option>
            ))}
          </select>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="f-author">작성자</label>
          <input
            id="f-author"
            className="form__input"
            type="text"
            placeholder="작성자 (미입력 시 익명)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="f-title">제목</label>
          <input
            id="f-title"
            className="form__input"
            type="text"
            placeholder={isQna ? '무엇이 궁금하신가요?' : '제목을 입력하세요'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="f-content">내용</label>
          <textarea
            id="f-content"
            className="form__input form__textarea"
            rows={8}
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {error && <p className="form__error">{error}</p>}

        <div className="form__actions">
          <button type="button" className="btn btn--secondary" onClick={onCancel}>
            취소
          </button>
          <button type="submit" className="btn btn--primary">
            {isQna ? '질문 등록' : '등록'}
          </button>
        </div>
      </form>
    </section>
  )
}
