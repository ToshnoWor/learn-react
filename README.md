# learn-react

A tutorial social-network application used to learn React and Redux by building real application features instead of isolated examples.

The project intentionally keeps its historical React 16 and hand-written Redux architecture as an educational baseline. Recovery work focuses on making that baseline runnable and testable before any large modernization.

## Features

- authentication and registration
- user profiles and editable profile fields
- posts
- users list and pagination
- follow and unfollow
- friends
- dialogs/messages UI
- Redux reducers, thunks, selectors and HOCs

The dialogs/messages UI is incomplete because the backend does not yet provide a message model/API.

## Requirements

- Node.js 22+
- matching `ToshnoWor/RestAPIServer` backend for API features

## Local development

Install dependencies:

```bash
npm ci
```

Start Vite:

```bash
npm run dev
```

By default the frontend uses relative `/api/` requests and Vite proxies them to `http://127.0.0.1:3033`.

To use another backend URL:

```bash
VITE_API_BASE_URL=https://example.test/api/ npm run dev
```

## Tests and build

```bash
npm test
npm run build
```

GitHub Actions runs tests, a production build and a production dependency audit for pull requests and pushes to `master`.

## GitHub Codespaces demo

The matching backend repository contains the full-stack Codespaces environment. It starts Node.js 22, MongoDB 8, this frontend and the Express backend, while exposing only the Vite frontend port.

Create a Codespace from `ToshnoWor/RestAPIServer`, then run:

```bash
npm run demo
```

Open forwarded port `5173`. To share the demo, change that port to **Public** in the Codespaces Ports panel.

## GitHub Pages

The Vite build still uses `/learn-react/` as its default production base path. A permanent GitHub Pages deployment is intentionally not enabled yet because the application currently has no permanent public backend; Codespaces is the working full-stack demo environment.
