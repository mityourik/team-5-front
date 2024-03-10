import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ambassadors/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '$primary-color: #fff; $secondary-color: #1A1B22;',
      },
    },
  },
});
