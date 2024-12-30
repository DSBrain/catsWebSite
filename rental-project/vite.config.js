import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
});