import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Diego-Agudelo-Landing-Page/",
  plugins: [react()],
  resolve: {
    alias: {
      "@layout": "/src/layout", 
      "@components": "/src/components", 
      "@pages": "/src/pages", 
      "@views": "/src/views", 
    },
  },
})
