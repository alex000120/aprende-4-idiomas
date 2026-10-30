import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/aprende-4-idiomas/',
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
