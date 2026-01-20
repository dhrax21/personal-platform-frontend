import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __API_BASE_URL__: JSON.stringify("http://localhost:9090"),
    __ADMIN_KEY__: JSON.stringify("5cab74a520d2e90a543e87f4e41e1222c7d9ec4e8f0f36fced8e8f15c434435f")
  },
})
