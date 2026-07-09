import { BOARD_META } from '../data/seed'
import Comments from './Comments.jsx'
import './PostDetail.css'

export default function PostDetail({ post, onBack, onDelete, onAddComment }) {
  const meta = BOARD_META[post.board]
  const isQna = post.board === 'qna'
  const answered = isQna && post.comments.length > 0

  const remove = () => {
    if (window.confirm('이 게시글을 삭제하시겠습니까?')) onDelete(post.id)
  }

  return (
    <article className="detail">
      <div className="detail__top">
        <button type="button" className="detail__back" onClick={onBack}>
          ← 목록
        </button>
        {meta && (
          <span className="detail__board" style={{ color: meta.color }}>
            {meta.label}
          </span>
        )}
        {isQna && (
          <span className={`detail__status ${answered ? 'is-done' : ''}`}>
            {answered ? '답변완료' : '미답변'}
          </span>
        )}
      </div>

      <h2 className="detail__title">{post.title}</h2>

      <div className="detail__meta">
        <span>{post.author}</span>
        <span className="detail__dot">·</span>
        <span>{post.date}</span>
        <span className="detail__dot">·</span>
        <span>조회 {post.views}</span>
      </div>

      <div className="detail__content">{post.content}</div>

      <div className="detail__actions">
        <button type="button" className="btn btn--danger btn--sm" onClick={remove}>
          삭제
        </button>
      </div>

      <Comments
        postId={post.id}
        comments={post.comments}
        isQna={isQna}
        onAddComment={onAddComment}
      />
    </article>
  )
}
