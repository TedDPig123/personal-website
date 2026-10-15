import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite's default fs.deny includes `**/.git/**`, which blocks the whole project when it
// lives inside a folder named `.git`. Deny only this repo's own .git directory instead.
const gitDir = fileURLToPath(new URL('./.git', import.meta.url)).replaceAll('\\', '/')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()],
  server: {
    fs: {
      deny: ['.env', '.env.*', '*.{crt,pem}', `${gitDir}/**`],
    },
  },
})
