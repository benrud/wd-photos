import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// PORT takes precedence so hosted environments can provide their required port.
// Replit defaults to 5000 for its workflow and preview proxy; other environments
// default to 3000 for compatibility with Google AI Studio.
const isReplit = Boolean(
  process.env.REPL_ID ||
  process.env.REPL_SLUG ||
  process.env.REPLIT_DEV_DOMAIN ||
  process.env.REPLIT_ENVIRONMENT
);

const configuredPort = Number.parseInt(process.env.PORT ?? '', 10);
const devPort =
  Number.isInteger(configuredPort) && configuredPort > 0
    ? configuredPort
    : isReplit
      ? 5000
      : 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: devPort,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
