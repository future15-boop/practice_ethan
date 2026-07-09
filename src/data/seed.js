// 초기 시드 데이터 (localStorage 최초 실행 시 주입)
export const BOARDS = [
  { key: 'all', label: '전체' },
  { key: 'notice', label: '공지사항' },
  { key: 'free', label: '자유게시판' },
  { key: 'qna', label: '묻고답하기' },
]

export const BOARD_META = {
  notice: { label: '공지사항', color: 'var(--accent-blue-info)' },
  free: { label: '자유게시판', color: 'var(--accent-purple)' },
  qna: { label: '묻고답하기', color: 'var(--accent-pink)' },
}

export const SEED_POSTS = [
  {
    id: 7,
    board: 'notice',
    title: '게시판 UI 데모가 오픈되었습니다',
    author: '관리자',
    date: '2026-07-09',
    views: 128,
    content:
      'React + Vite로 만든 게시판 데모가 오픈되었습니다.\n글쓰기, 상세보기, 댓글, 묻고답하기, 페이지네이션 기능을 사용해보세요.',
    comments: [],
  },
  {
    id: 6,
    board: 'qna',
    title: '페이지네이션은 어떻게 동작하나요?',
    author: '홍길동',
    date: '2026-07-09',
    views: 64,
    content: '한 페이지에 몇 개씩 보이고, 검색과 함께 쓰면 어떻게 되는지 궁금합니다.',
    comments: [
      {
        id: 1,
        author: '관리자',
        content: '한 페이지에 5개씩 보이며, 검색 결과에도 페이지네이션이 함께 적용됩니다.',
        date: '2026-07-09',
      },
    ],
  },
  {
    id: 5,
    board: 'free',
    title: 'Webflow 디자인 표준 적용 후기',
    author: '홍길동',
    date: '2026-07-08',
    views: 210,
    content: '컬러/타이포/여백 토큰을 그대로 쓰니 화면이 훨씬 일관돼 보이네요.',
    comments: [
      { id: 1, author: '이몽룡', content: '동감합니다. 배지 색상도 깔끔해요.', date: '2026-07-08' },
    ],
  },
  {
    id: 4,
    board: 'qna',
    title: '댓글은 실제로 저장되나요?',
    author: '성춘향',
    date: '2026-07-08',
    views: 39,
    content: '새로고침해도 남아있는지 궁금합니다.',
    comments: [],
  },
  {
    id: 3,
    board: 'free',
    title: 'React + Vite 전환 완료',
    author: '관리자',
    date: '2026-07-08',
    views: 92,
    content: '기존 정적 HTML을 컴포넌트 기반으로 옮겼습니다.',
    comments: [],
  },
  {
    id: 2,
    board: 'notice',
    title: '반응형 레이아웃이 보완되었습니다',
    author: '관리자',
    date: '2026-07-07',
    views: 71,
    content: '모바일/태블릿/데스크톱에서 레이아웃이 자연스럽게 접힙니다.',
    comments: [],
  },
  {
    id: 1,
    board: 'free',
    title: '첫 번째 게시글입니다',
    author: '관리자',
    date: '2026-07-06',
    views: 57,
    content: '반갑습니다. 자유롭게 글을 남겨주세요.',
    comments: [],
  },
]
