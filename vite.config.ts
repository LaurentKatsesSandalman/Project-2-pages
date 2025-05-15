import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Project-2-pages/', // Nom exact du dépôt GitHub
  // base: '/',
  plugins: [react()],
})
