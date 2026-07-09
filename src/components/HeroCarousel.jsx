import { useEffect, useState } from 'react'
import './HeroCarousel.css'

// 5개 슬라이드 — 디자인 표준의 5색 액센트 팔레트 (바탕 파스텔 주황과 대비)
const SLIDES = [
  { key: 'purple', bg: 'var(--accent-purple)', ink: false, eyebrow: 'Notice', title: '새로운 게시판이 열렸습니다', desc: '공지 · 자유 · 묻고답하기까지 한 곳에서.' },
  { key: 'pink', bg: 'var(--accent-pink)', ink: false, eyebrow: 'Community', title: '자유롭게 이야기 나눠요', desc: '댓글로 의견을 남기고 소통해보세요.' },
  { key: 'blue', bg: 'var(--accent-blue)', ink: false, eyebrow: 'Q&A', title: '궁금한 건 물어보세요', desc: '묻고답하기에서 빠르게 답변을 받아요.' },
  { key: 'orange', bg: 'var(--accent-orange)', ink: false, eyebrow: 'Update', title: '반응형으로 어디서나', desc: '모바일 · 태블릿 · 데스크톱 완벽 대응.' },
  { key: 'green', bg: 'var(--accent-green)', ink: true, eyebrow: 'Design', title: 'Webflow 디자인 표준 적용', desc: '일관된 컬러 · 타이포 · 여백 시스템.' },
]

const INTERVAL = 3500

function SlideArt({ index, ink }) {
  const stroke = ink ? '#080808' : '#ffffff'
  const fill = ink ? 'rgba(8,8,8,0.12)' : 'rgba(255,255,255,0.18)'
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 200 160" aria-hidden="true">
          <circle cx="140" cy="60" r="46" fill={fill} />
          <circle cx="70" cy="110" r="30" fill="none" stroke={stroke} strokeWidth="4" />
          <rect x="30" y="30" width="52" height="52" rx="10" fill={fill} />
        </svg>
      )
    case 1:
      return (
        <svg viewBox="0 0 200 160" aria-hidden="true">
          <path d="M40 40 h90 a20 20 0 0 1 20 20 v30 a20 20 0 0 1 -20 20 H80 l-24 22 v-22 h-16 a20 20 0 0 1 -20 -20 V60 a20 20 0 0 1 20 -20z" fill={fill} />
          <circle cx="70" cy="76" r="6" fill={stroke} />
          <circle cx="100" cy="76" r="6" fill={stroke} />
          <circle cx="130" cy="76" r="6" fill={stroke} />
        </svg>
      )
    case 2:
      return (
        <svg viewBox="0 0 200 160" aria-hidden="true">
          <circle cx="100" cy="80" r="52" fill="none" stroke={stroke} strokeWidth="4" />
          <text x="100" y="104" textAnchor="middle" fontSize="70" fontWeight="700" fill={fill}>?</text>
        </svg>
      )
    case 3:
      return (
        <svg viewBox="0 0 200 160" aria-hidden="true">
          <rect x="34" y="46" width="60" height="90" rx="8" fill={fill} />
          <rect x="104" y="30" width="46" height="80" rx="10" fill="none" stroke={stroke} strokeWidth="4" />
          <circle cx="150" cy="130" r="16" fill={fill} />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 200 160" aria-hidden="true">
          <rect x="36" y="40" width="128" height="80" rx="12" fill={fill} />
          <line x1="52" y1="66" x2="120" y2="66" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <line x1="52" y1="86" x2="148" y2="86" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <circle cx="150" cy="46" r="10" fill={stroke} />
        </svg>
      )
  }
}

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0)

  // 자동 전환 (수동 조작 시 타이머 리셋)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), INTERVAL)
    return () => clearInterval(t)
  }, [idx])

  const go = (n) => setIdx((n + SLIDES.length) % SLIDES.length)

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="상단 배너">
      <div className="carousel__viewport">
        {SLIDES.map((s, i) => (
          <div
            key={s.key}
            className={`carousel__slide ${i === idx ? 'is-active' : ''} ${s.ink ? 'is-ink' : ''}`}
            style={{ background: s.bg }}
            aria-hidden={i !== idx}
          >
            <div className="carousel__text">
              <p className="carousel__eyebrow">{s.eyebrow}</p>
              <h2 className="carousel__title">{s.title}</h2>
              <p className="carousel__desc">{s.desc}</p>
            </div>
            <div className="carousel__art">
              <SlideArt index={i} ink={s.ink} />
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="carousel__arrow carousel__arrow--prev" aria-label="이전 배너" onClick={() => go(idx - 1)}>
        ‹
      </button>
      <button type="button" className="carousel__arrow carousel__arrow--next" aria-label="다음 배너" onClick={() => go(idx + 1)}>
        ›
      </button>

      <div className="carousel__dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            className={`carousel__dot ${i === idx ? 'is-active' : ''}`}
            aria-label={`${i + 1}번 배너로 이동`}
            aria-current={i === idx ? 'true' : undefined}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  )
}
