import { useState } from 'react'
import { BOARDS } from '../data/seed'
import './TopNav.css'

export default function TopNav({ activeBoard, onSelectBoard, onHome }) {
  const [open, setOpen] = useState(false)

  const select = (key) => {
    onSelectBoard(key)
    setOpen(false)
  }

  return (
    <nav className="topnav">
      <div className="topnav__inner">
        <button type="button" className="topnav__brand" onClick={onHome}>
          Claude<span className="topnav__brand-dot">.</span>Board
        </button>

        <button
          type="button"
          className="topnav__toggle"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`topnav__menu ${open ? 'is-open' : ''}`}>
          {BOARDS.map((b) => (
            <li key={b.key}>
              <button
                type="button"
                className={`topnav__link ${activeBoard === b.key ? 'is-active' : ''}`}
                onClick={() => select(b.key)}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
