import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/team-5-front/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '$primary-color: #fff; $secondary-color: #1A1B22;',
      },
    },
  },
});
