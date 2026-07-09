import Banner from './components/Banner.jsx'
import Board from './components/Board.jsx'
import Profile from './components/Profile.jsx'
import './App.css'

export default function App() {
  return (
    <div className="page">
      {/* ① 배너 영역 */}
      <Banner />

      {/* ② 게시판 UI */}
      <main className="page__main">
        <Board />
      </main>

      {/* ③ 프로필 영역 */}
      <Profile />
    </div>
  )
}
