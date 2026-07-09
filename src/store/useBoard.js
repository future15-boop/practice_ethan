import { useState, useCallback } from 'react'
import { SEED_POSTS } from '../data/seed'

const KEY = 'practice_board_posts_v1'

function today() {
  const d = new Date()
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    /* ignore parse errors, fall back to seed */
  }
  return SEED_POSTS
}

function save(posts) {
  try {
    localStorage.setItem(KEY, JSON.stringify(posts))
  } catch {
    /* storage may be unavailable (private mode) */
  }
}

// 게시판 상태 스토어 (localStorage 영속화)
export function useBoard() {
  const [posts, setPosts] = useState(load)

  const persist = useCallback((next) => {
    setPosts(next)
    save(next)
  }, [])

  const getPost = useCallback((id) => posts.find((p) => p.id === id), [posts])

  const addPost = useCallback(
    ({ board, title, content, author }) => {
      const nextId = posts.reduce((m, p) => Math.max(m, p.id), 0) + 1
      const post = {
        id: nextId,
        board,
        title: title.trim(),
        content: content.trim(),
        author: author.trim() || '익명',
        date: today(),
        views: 0,
        comments: [],
      }
      persist([post, ...posts])
      return nextId
    },
    [posts, persist],
  )

  const removePost = useCallback(
    (id) => persist(posts.filter((p) => p.id !== id)),
    [posts, persist],
  )

  const incrementView = useCallback(
    (id) => persist(posts.map((p) => (p.id === id ? { ...p, views: p.views + 1 } : p))),
    [posts, persist],
  )

  const addComment = useCallback(
    (id, { author, content }) => {
      persist(
        posts.map((p) => {
          if (p.id !== id) return p
          const cId = p.comments.reduce((m, c) => Math.max(m, c.id), 0) + 1
          return {
            ...p,
            comments: [
              ...p.comments,
              { id: cId, author: author.trim() || '익명', content: content.trim(), date: today() },
            ],
          }
        }),
      )
    },
    [posts, persist],
  )

  return { posts, getPost, addPost, removePost, incrementView, addComment }
}
