# practice_ethan

React + Vite로 만든 게시판 UI 데모입니다. [Webflow 디자인 표준](./DESIGN-webflow.md)의 컬러 · 타이포그래피 · 여백 토큰을 적용했습니다.

## 화면 구성

한 화면을 3단으로 구성했습니다.

1. **배너 영역** — 니어블랙(`#080808`) 히어로 밴드 (`hello, claude!`)
2. **게시판 UI** — 게시글 목록 테이블 + 글쓰기 버튼, 카테고리 배지
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
   ├─ App.jsx / App.css
   ├─ index.css          # Webflow 디자인 토큰
   └─ components/
      ├─ Banner.jsx  + .css   # ① 배너
      ├─ Board.jsx   + .css   # ② 게시판
      └─ Profile.jsx + .css   # ③ 프로필
```
