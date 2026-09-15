# Agent instructions

## Preview and workflow rules

- This is a Vite web app served through Replit's preview proxy.
- Vite must bind to `0.0.0.0:5000`.
- The `Start application` workflow must wait for port `5000`, and its webview must remain mapped to port `5000`.
- Never change the Vite port to `3000`, `5173`, or another port without updating the workflow and port mapping in the same change.
- After changing `vite.config.ts`, `.replit`, or the dev command, restart the workflow and verify its logs contain `http://localhost:5000/`; also confirm the preview responds before finishing.
- Keep same-project frontend URLs relative. Do not hardcode `localhost` or a Replit domain in application code.

## Verification rules

- Run `npm run lint` and `npm run build` after app changes.
- Preserve the existing React/Vite/Tailwind structure unless the user explicitly asks for a migration.