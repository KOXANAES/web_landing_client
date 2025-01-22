import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // или '@vitejs/plugin-vue' для Vue
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Создаем алиас для папки src
    },
  },
});