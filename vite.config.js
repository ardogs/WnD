import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
})
