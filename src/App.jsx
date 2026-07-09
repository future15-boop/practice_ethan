import { useState } from 'react'
import TopNav from './components/TopNav.jsx'
import Banner from './components/Banner.jsx'
import BoardList from './components/BoardList.jsx'
import PostDetail from './components/PostDetail.jsx'
import PostForm from './components/PostForm.jsx'
import Profile from './components/Profile.jsx'
import { useBoard } from './store/useBoard.js'
import './App.css'

export default function App() {
  const board = useBoard()

  const [view, setView] = useState('list') // 'list' | 'detail' | 'write'
  const [activeBoard, setActiveBoard] = useState('all')
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [currentId, setCurrentId] = useState(null)

  const selectBoard = (key) => {
    setActiveBoard(key)
    setPage(1)
    setQuery('')
    setView('list')
  }

  const openDetail = (id) => {
    board.incrementView(id)
    setCurrentId(id)
    setView('detail')
  }

  const openWrite = () => setView('write')
  const goList = () => setView('list')

  const submitPost = (data) => {
    const id = board.addPost(data)
    setCurrentId(id)
    setView('detail')
  }

  const removeAndBack = (id) => {
    board.removePost(id)
    setView('list')
  }

  const current = board.getPost(currentId)

  return (
    <div className="page">
      <TopNav activeBoard={activeBoard} onSelectBoard={selectBoard} onHome={() => selectBoard('all')} />
      <Banner />

      <main className="page__main">
        {view === 'list' && (
          <BoardList
            posts={board.posts}
            activeBoard={activeBoard}
            page={page}
            onPageChange={setPage}
            query={query}
            onQueryChange={(q) => {
              setQuery(q)
              setPage(1)
            }}
            onOpen={openDetail}
            onWrite={openWrite}
          />
        )}

        {view === 'detail' &&
          (current ? (
            <PostDetail
              post={current}
              onBack={goList}
              onDelete={removeAndBack}
              onAddComment={board.addComment}
            />
          ) : (
            <div className="page__missing">
              게시글을 찾을 수 없습니다.
              <button type="button" className="btn btn--primary" onClick={goList}>
                목록으로
              </button>
            </div>
          ))}

        {view === 'write' && (
          <PostForm defaultBoard={activeBoard === 'all' ? 'free' : activeBoard} onSubmit={submitPost} onCancel={goList} />
        )}
      </main>

      <Profile />
    </div>
  )
}
