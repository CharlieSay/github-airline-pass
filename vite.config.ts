import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "talesoft-digital",
    project: "github-airline-pass",
  })],

  optimizeDeps: {
    exclude: ["lucide-react"],
  },

  build: {
    sourcemap: true,
  },
});