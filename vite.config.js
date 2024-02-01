// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { createProxyMiddleware } from 'http-proxy-middleware';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     middleware: [
//       createProxyMiddleware('/api', {
//         target: 'https://api.sportmonks.com',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       }),
//     ],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.sportmonks.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

