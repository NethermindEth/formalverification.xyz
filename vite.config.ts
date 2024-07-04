import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, "index.html"),
        404: path.join(__dirname, "public/404.html"),
      },
      output: {
        dir: "build"
      }
    },
  },
});
