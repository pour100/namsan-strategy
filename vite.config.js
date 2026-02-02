import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 이 설정을 사용하면 깃허브 저장소 이름에 상관없이 파일 경로를 자동으로 맞춰줍니다.
})