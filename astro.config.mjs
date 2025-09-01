import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    tailwind(),
    sitemap()
  ],
  build: {
    // Optimize build output
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Optimize chunk splitting for better loading
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      },
      // Reduce bundle size
      minify: 'terser',
      cssMinify: true
    },
    // Optimize development
    optimizeDeps: {
      include: ['astro']
    }
  }
});
