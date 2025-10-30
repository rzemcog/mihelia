You are tasked with migrating a project from Preact to React, without altering any business logic, component behavior, or application flow.

✅ Constraints:

Do NOT change any functional logic — only replace Preact-specific code with React equivalents.
Use preact/compat as an intermediate layer if needed, but aim for full React API usage by the end.
Target the latest stable React version (19.2.0).
Assume no SSR/SSG unless explicitly confirmed later.
Assume no third-party Preact-specific libraries unless discovered during migration.
Ask user after each step if everything works correctly.
Decompose the task into clear, sequential steps. After each step, pause and ask for confirmation before proceeding.
If you encounter any ambiguity (e.g., unknown Preact internals, unclear lifecycle behavior), ask for clarification before acting.
Prioritize correctness over speed. Never guess — always validate assumptions.

🔍 First Step:
Identify all import statements that reference preact, preact/compat, or Preact hooks (useState, useEffect, etc.).
Replace them with React equivalents (react, react-dom, react/jsx-runtime, etc.).
Update JSX pragma if needed (e.g., remove /** @jsx h */ if using React’s default JSX transform).
Confirm the build still runs and components render visually unchanged.

⚠️ Important:
Do not proceed to the next step until I confirm the current one is working as expected. Ask me specific questions if anything is unclear — never assume.
Do not use shell commands - ask user for doing them for you.
After each step change './mihelia-tg-miniapp/gemini.md' tu update project structure and which files are already migrated.

Current Status:
We're in progress of migration. We're checking for left preact dependencies in files. 'gemini.md' is outdated.