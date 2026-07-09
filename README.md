# practice_ethan

React + Vite로 만든 게시판 UI 데모입니다. [Webflow 디자인 표준](./DESIGN-webflow.md)의 컬러 · 타이포그래피 · 여백 토큰을 적용했습니다.

## 주요 기능

- **상단 네비게이션 바** — 게시판 탭(전체 / 공지사항 / 자유게시판 / 묻고답하기), 모바일 햄버거 메뉴
- **히어로 배너** — 파스텔 주황 배경 (`Hi My Claude Test Site`)
- **게시판 목록** — 게시판별 필터 · 제목/작성자 검색 · **페이지네이션**(5개/페이지)
- **글쓰기 / 상세 보기** — 게시글 작성, 상세 조회(조회수 증가), 삭제
- **묻고답하기(Q&A)** — 답변완료 / 미답변 상태 배지
- **댓글 · 답변** — 게시글별 댓글(자유/공지) 및 답변(묻고답하기)
- **localStorage 영속화** — 작성한 글/댓글이 새로고침 후에도 유지
- **반응형** — 모바일 / 태블릿 / 데스크톱 레이아웃 대응

## 화면 구성 (3단)

1. **배너 영역** — 파스텔 주황 히어로 밴드
2. **게시판 UI** — 목록 · 검색 · 페이지네이션 · 글쓰기 · 상세 · 댓글
3. **프로필 영역** — 홍길동 / 010-1234-5678 / abcd@abcd.com

## 기술 스택

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) 5
- CSS 디자인 토큰 (`src/index.css`)

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (브라우저 자동 오픈, http://localhost:5173)
npm run dev

# 프로덕션 빌드 (dist/ 생성)
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 폴더 구조

```
practice/
├─ index.html            # Vite 엔트리
├─ vite.config.js        # server.open: true (dev 시 브라우저 자동 실행)
├─ package.json
├─ DESIGN-webflow.md     # 디자인 표준 가이드
└─ src/
   ├─ main.jsx
   ├─ App.jsx / App.css      # 화면 라우팅(목록/상세/글쓰기) 상태 관리
   ├─ index.css              # Webflow 디자인 토큰
   ├─ data/seed.js           # 게시판 정의 + 초기 시드 데이터
   ├─ store/useBoard.js      # 게시판 상태 스토어 (localStorage)
   └─ components/
      ├─ TopNav.jsx     + .css   # 상단 네비게이션
      ├─ Banner.jsx     + .css   # ① 배너
      ├─ BoardList.jsx  + .css   # ② 목록 + 검색
      ├─ Pagination.jsx + .css   # 페이지네이션
      ├─ PostForm.jsx   + .css   # 글쓰기 폼
      ├─ PostDetail.jsx + .css   # 상세 보기
      ├─ Comments.jsx   + .css   # 댓글 / 답변
      └─ Profile.jsx    + .css   # ③ 프로필
```
