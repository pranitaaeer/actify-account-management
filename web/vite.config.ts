import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      // Yeh Vite ko batayega ki '@shared' ka matlab bahar wala 'shared' folder hai
      '@shared': path.resolve(__dirname, '../shared'),
    },
  }
})
