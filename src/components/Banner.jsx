import './Banner.css'

export default function Banner() {
  return (
    <header className="banner">
      <div className="banner__inner">
        <p className="eyebrow banner__eyebrow">Welcome</p>
        <h1 className="banner__title">hello, claude!</h1>
        <p className="banner__lead">
          React + Vite로 만든 게시판 데모입니다. Webflow 디자인 표준을 적용했습니다.
        </p>
      </div>
    </header>
  )
}
