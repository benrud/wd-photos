import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Dual-environment port configuration:
// Replit runtime sets REPL_ID, REPL_SLUG, REPLIT_DEV_DOMAIN, etc.
// When running in Replit, Vite binds strictly to port 5000 to satisfy Replit's workflow and preview proxy.
// When running in Google AI Studio, Vite binds strictly to port 3000 as required by the AI Studio proxy.
const isReplit = Boolean(
  process.env.REPL_ID ||
  process.env.REPL_SLUG ||
  process.env.REPLIT_DEV_DOMAIN ||
  process.env.REPLIT_ENVIRONMENT
);

const devPort = isReplit ? 5000 : 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: devPort,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
