# Namsan Strategic Advisors - 개인 웹사이트

맥킨지 스타일의 깔끔하고 전략적인 디자인의 개인 웹사이트입니다.

## 기술 스택

- **React 18** - 사용자 인터페이스 구축
- **Vite** - 빠른 개발 환경 및 빌드 도구
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **반응형 디자인** - 모바일, 태블릿, 데스크톱 지원

## 주요 특징

- 🎨 맥킨지 스타일의 깔끔하고 전략적인 디자인
- 🏢 Namsan Strategic Advisors 브랜드 정체성 강조
- 🎓 화학/물리학 전공 및 MBA 배경 하이라이트
- 📱 완전 반응형 디자인
- ⚡ 빠른 로딩 속도 및 최적화

## 설치 및 실행

### 필수 요구사항

- Node.js 16.x 이상
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
.
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── Header.jsx   # 헤더 및 네비게이션
│   │   ├── Hero.jsx    # 히어로 섹션
│   │   ├── About.jsx   # 소개 섹션
│   │   ├── Experience.jsx # 경력 섹션
│   │   ├── Education.jsx # 학력 섹션
│   │   ├── Services.jsx # 서비스 섹션
│   │   └── Footer.jsx  # 푸터 및 연락처
│   ├── App.jsx         # 메인 앱 컴포넌트
│   ├── main.jsx        # 진입점
│   └── index.css       # 전역 스타일
├── index.html          # HTML 템플릿
├── package.json        # 프로젝트 설정
├── tailwind.config.js  # Tailwind CSS 설정
└── vite.config.js      # Vite 설정
```

## 커스터마이징

### 색상 변경

`tailwind.config.js` 파일에서 색상을 수정할 수 있습니다:

```javascript
colors: {
  'mckinsey-blue': '#1E3A5F',
  'mckinsey-dark': '#0F1E2E',
  'mckinsey-light': '#E8F0F5',
  'accent': '#2C5F8D',
}
```

### 콘텐츠 수정

각 컴포넌트 파일(`src/components/`)에서 텍스트와 정보를 수정할 수 있습니다.

## 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.
