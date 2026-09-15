# Project setup

This project is a React 19 frontend built with Vite, TypeScript, and Tailwind CSS.

## Required agent rules

- Preserve the Replit preview port contract: Vite must listen on `0.0.0.0:5000`, and the `Start application` workflow must wait for port `5000`.
- Do not change the Vite port to `3000`, `5173`, or another port unless the workflow and port forwarding are updated together.
- After editing `vite.config.ts`, `.replit`, or the development command, verify that the running workflow logs show `http://localhost:5000/`, then confirm the preview responds before finishing.
- Use relative URLs for same-project assets and APIs; do not hardcode `localhost` or a Replit domain in application code.
- Run `npm run lint` and `npm run build` after code changes that can affect the app.

## Run locally on Replit

- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- The Replit workflow serves the app on port 5000.

## Checks

- Type-check: `npm run lint`
- Production build: `npm run build`