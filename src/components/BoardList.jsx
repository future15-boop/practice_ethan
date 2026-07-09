import { useMemo } from 'react'
import { BOARD_META } from '../data/seed'
import Pagination from './Pagination.jsx'
import './BoardList.css'

const PAGE_SIZE = 5

const BOARD_TITLE = {
  all: '전체 게시글',
  notice: '공지사항',
  free: '자유게시판',
  qna: '묻고답하기',
}

export default function BoardList({
  posts,
  activeBoard,
  page,
  onPageChange,
  query,
  onQueryChange,
  onOpen,
  onWrite,
}) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts
      .filter((p) => (activeBoard === 'all' ? true : p.board === activeBoard))
      .filter((p) =>
        q === ''
          ? true
          : p.title.toLowerCase().includes(q) || p.author.toLowerCase().includes(q),
      )
      .sort((a, b) => b.id - a.id)
  }, [posts, activeBoard, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const pageItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const isQna = activeBoard === 'qna'

  return (
    <section className="board">
      <div className="board__head">
        <div>
          <p className="eyebrow">Board</p>
          <h2 className="board__title">{BOARD_TITLE[activeBoard]}</h2>
        </div>
        <div className="board__actions">
          <input
            className="board__search"
            type="search"
            placeholder="제목 · 작성자 검색"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
          <button type="button" className="btn btn--primary" onClick={onWrite}>
            글쓰기
          </button>
        </div>
      </div>

      {pageItems.length === 0 ? (
        <div className="board__empty">게시글이 없습니다. 첫 글을 작성해보세요.</div>
      ) : (
        <table className="board__table">
          <thead>
            <tr>
              <th className="board__th board__th--no">No</th>
              <th className="board__th">제목</th>
              <th className="board__th board__th--author">작성자</th>
              <th className="board__th board__th--date">작성일</th>
              <th className="board__th board__th--views">조회</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((post) => {
              const meta = BOARD_META[post.board]
              const answered = post.board === 'qna' && post.comments.length > 0
              return (
                <tr className="board__row" key={post.id} onClick={() => onOpen(post.id)}>
                  <td className="board__td board__td--no">{post.id}</td>
                  <td className="board__td board__td--title">
                    {activeBoard === 'all' && meta && (
                      <span className="board__badge" style={{ color: meta.color }}>
                        {meta.label}
                      </span>
                    )}
                    {isQna && (
                      <span className={`board__status ${answered ? 'is-done' : ''}`}>
                        {answered ? '답변완료' : '미답변'}
                      </span>
                    )}
                    <span className="board__link">{post.title}</span>
                    {post.comments.length > 0 && (
                      <span className="board__count">[{post.comments.length}]</span>
                    )}
                  </td>
                  <td className="board__td board__td--author">{post.author}</td>
                  <td className="board__td board__td--date">{post.date}</td>
                  <td className="board__td board__td--views">{post.views}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}

      <Pagination page={safePage} totalPages={totalPages} onChange={onPageChange} />
    </section>
  )
}
