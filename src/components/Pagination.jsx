import './Pagination.css'

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="pager" aria-label="페이지 네비게이션">
      <button
        type="button"
        className="pager__btn"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        이전
      </button>

      {pages.map((n) => (
        <button
          key={n}
          type="button"
          className={`pager__btn pager__num ${n === page ? 'is-active' : ''}`}
          aria-current={n === page ? 'page' : undefined}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        className="pager__btn"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        다음
      </button>
    </nav>
  )
}
