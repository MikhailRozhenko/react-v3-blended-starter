import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // для Vercel сайт на корне
  plugins: [react()],
});
