import { useState } from 'react'
import './Comments.css'

export default function Comments({ postId, comments, isQna, onAddComment }) {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const label = isQna ? '답변' : '댓글'

  const submit = (e) => {
    e.preventDefault()
    if (content.trim() === '') return
    onAddComment(postId, { author, content })
    setContent('')
  }

  return (
    <section className="comments">
      <h3 className="comments__title">
        {label} <span className="comments__count">{comments.length}</span>
      </h3>

      {comments.length === 0 ? (
        <p className="comments__empty">
          {isQna ? '아직 답변이 없습니다. 첫 답변을 남겨주세요.' : '아직 댓글이 없습니다.'}
        </p>
      ) : (
        <ul className="comments__list">
          {comments.map((c) => (
            <li className="comments__item" key={c.id}>
              <div className="comments__meta">
                <span className="comments__author">{c.author}</span>
                <span className="comments__date">{c.date}</span>
              </div>
              <p className="comments__content">{c.content}</p>
            </li>
          ))}
        </ul>
      )}

      <form className="comments__form" onSubmit={submit}>
        <input
          className="comments__input comments__input--author"
          type="text"
          placeholder="이름"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="comments__input"
          type="text"
          placeholder={`${label}을 입력하세요`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="btn btn--primary btn--sm">
          등록
        </button>
      </form>
    </section>
  )
}
