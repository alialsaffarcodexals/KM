# MamlakatAlm3r8een

This repository contains the source code for **MamlakatAlm3r8een**, a web project that mimics some community and administration features similar to Discord. The project is divided into two parts:

- `backend/` – Node.js + Express.js server with MongoDB.
- `frontend/` – React application bootstrapped with Vite and Tailwind CSS.

The folders under `frontend/public/` and `backend/uploads/` are intentionally empty for you to place images, audio files, and documents in your deployment environment.

## Project Structure

```
backend/
  config/
  controllers/
  middleware/
  models/
  routes/
  uploads/
frontend/
  public/
  src/
    components/
    context/
    pages/
```

## Setup

Each part has its own `package.json`. Install dependencies with `npm install` inside both `backend/` and `frontend/`.

Run the backend with `node server.js` (development scripts can be added later). Start the frontend with `npm run dev` from the `frontend/` directory.

Environment variables should be defined in a `.env` file based on the template `.env.example` found in `backend/`.

```sh
cd backend && cp .env.example .env
```

The application relies on MongoDB, JWT tokens for authentication, and Socket.IO for live communications.

## Contributing

Pull requests are welcome. Please ensure any install or build failures are fixed before opening a PR.
