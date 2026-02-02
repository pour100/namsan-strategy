# 웹사이트 배포 가이드

이 문서는 Namsan Strategic Advisors 웹사이트를 배포하는 여러 방법을 안내합니다.

## 방법 1: Vercel (추천 - 가장 쉬움)

Vercel은 React/Vite 프로젝트에 최적화되어 있으며, 무료로 사용할 수 있습니다.

### 단계별 가이드

1. **Vercel 계정 생성**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인 (권장)

2. **프로젝트 배포**
   - Vercel 대시보드에서 "Add New Project" 클릭
   - GitHub 저장소 선택 또는 직접 업로드
   - 프로젝트 설정:
     - Framework Preset: `Vite`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - "Deploy" 클릭

3. **자동 배포 설정 (GitHub 연동 시)**
   - GitHub에 코드를 푸시하면 자동으로 재배포됩니다
   - 커스텀 도메인도 무료로 설정 가능

### 장점
- ✅ 완전 무료
- ✅ 자동 HTTPS
- ✅ 빠른 CDN
- ✅ GitHub 연동 시 자동 배포
- ✅ 커스텀 도메인 지원

---

## 방법 2: Netlify

Netlify도 무료로 사용할 수 있는 좋은 옵션입니다.

### 단계별 가이드

1. **Netlify 계정 생성**
   - https://www.netlify.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택 또는 드래그 앤 드롭
   - 빌드 설정:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - "Deploy site" 클릭

### 장점
- ✅ 완전 무료
- ✅ 자동 HTTPS
- ✅ 폼 처리 기능 (연락처 폼에 유용)
- ✅ GitHub 연동 시 자동 배포

---

## 방법 3: GitHub Pages

GitHub 저장소가 있다면 GitHub Pages를 사용할 수 있습니다.

### 단계별 가이드

1. **vite.config.js 수정**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // 저장소 이름으로 변경
   })
   ```

2. **GitHub Actions 설정**
   - `.github/workflows/deploy.yml` 파일 생성 (아래 참조)

3. **GitHub 저장소 설정**
   - Settings → Pages
   - Source: GitHub Actions 선택

### 장점
- ✅ 완전 무료
- ✅ GitHub와 통합
- ⚠️ 커스텀 도메인 설정 필요

---

## 방법 4: AWS S3 + CloudFront

프로덕션 환경에 적합한 방법입니다.

### 단계별 가이드

1. **S3 버킷 생성**
   - AWS 콘솔에서 S3 버킷 생성
   - 정적 웹사이트 호스팅 활성화

2. **빌드 및 업로드**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name
   ```

3. **CloudFront 설정** (선택사항)
   - CDN을 통한 빠른 전송
   - HTTPS 자동 설정

---

## 빠른 시작 (Vercel 추천)

가장 빠르게 배포하려면:

1. **GitHub에 코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 접속
   - "Import Project" 클릭
   - GitHub 저장소 선택
   - 자동으로 감지된 설정 확인 후 "Deploy"

3. **완료!**
   - 몇 분 내에 배포 완료
   - `https://your-project.vercel.app` 형태의 URL 제공

---

## 배포 전 체크리스트

- [ ] `package.json`의 프로젝트 정보 확인
- [ ] 모든 텍스트와 정보가 최신인지 확인
- [ ] 연락처 정보가 정확한지 확인
- [ ] 이미지 및 리소스 경로 확인
- [ ] 모바일 반응형 테스트

---

## 커스텀 도메인 설정

### Vercel
1. 프로젝트 설정 → Domains
2. 도메인 추가
3. DNS 설정 안내에 따라 도메인 제공업체에서 설정

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. DNS 설정 안내 따르기

---

## 문제 해결

### 빌드 오류
```bash
# 로컬에서 빌드 테스트
npm run build
npm run preview
```

### 경로 오류
- `vite.config.js`에서 `base` 설정 확인
- 상대 경로 사용 확인

### 이미지 로드 오류
- 이미지는 `public` 폴더에 배치
- 경로는 `/image-name.jpg` 형식 사용
