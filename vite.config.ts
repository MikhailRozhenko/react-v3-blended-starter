import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/react-v3-blended-starter/', // обязательно для GitHub Pages
  plugins: [react()],
});
