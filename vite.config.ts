import { defineConfig } from 'vite'
import { fileURLToPath } from "url";
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
})
