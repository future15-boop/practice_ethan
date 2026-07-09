import './Board.css'

const POSTS = [
  { id: 4, category: 'Notice', title: '게시판 UI 데모가 오픈되었습니다', author: '홍길동', date: '2026-07-09', views: 128 },
  { id: 3, category: 'React',  title: 'React + Vite 프로젝트로 전환 완료', author: '관리자', date: '2026-07-08', views: 92 },
  { id: 2, category: 'Design', title: 'Webflow 디자인 표준 적용 가이드', author: '홍길동', date: '2026-07-07', views: 210 },
  { id: 1, category: 'Notice', title: '첫 번째 게시글입니다', author: '관리자', date: '2026-07-06', views: 57 },
]

const CATEGORY_COLOR = {
  Notice: 'var(--accent-blue-info)',
  React: 'var(--accent-purple)',
  Design: 'var(--accent-pink)',
}

export default function Board() {
  return (
    <section className="board">
      <div className="board__head">
        <div>
          <p className="eyebrow">Board</p>
          <h2 className="board__title">게시판</h2>
        </div>
        <button className="board__write" type="button">글쓰기</button>
      </div>

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
          {POSTS.map((post) => (
            <tr className="board__row" key={post.id}>
              <td className="board__td board__td--no">{post.id}</td>
              <td className="board__td board__td--title">
                <span
                  className="board__badge"
                  style={{ color: CATEGORY_COLOR[post.category] }}
                >
                  {post.category}
                </span>
                <span className="board__link">{post.title}</span>
              </td>
              <td className="board__td board__td--author">{post.author}</td>
              <td className="board__td board__td--date">{post.date}</td>
              <td className="board__td board__td--views">{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
