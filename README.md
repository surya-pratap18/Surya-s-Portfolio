# Surya Pratap Mallick — MERN Portfolio

A structured React/Vite + Node/Express + MongoDB portfolio rebuilt from the original single HTML page. The visual design, dark/light theme, particle network, responsive navigation, scroll reveal, 3D card tilt, typography, colors and section structure are preserved.

## Structure

- `frontend/` — React + Vite frontend
- `backend/` — Express API + Mongoose model
- `frontend/src/data.js` — local fallback portfolio data
- `backend/routes/portfolio.js` — database-backed portfolio API

## Run locally

1. Install Node.js 20+.
2. From the root: `npm install` (installs concurrently), then `npm run install:all`.
3. Optional MongoDB: copy `backend/.env.example` to `backend/.env` and set `MONGO_URI`.
4. Run `npm run dev`.
5. Frontend: http://localhost:5173
6. API: http://localhost:5000/api/health

The frontend works even without MongoDB because it falls back to `frontend/src/data.js`.

## Add resume

Place your PDF at:
`frontend/public/assets/Surya_Pratap_Mallick_Resume.pdf`

## Add more skills/projects

For immediate local updates edit `frontend/src/data.js`. Once MongoDB is connected, `PUT /api/portfolio` can store the complete portfolio object and the React app will consume it automatically.

## Deployment

- Frontend: Vercel/Netlify/GitHub Pages-compatible static build (`frontend/dist`)
- Backend: Render/Railway/Fly.io/etc.
- Database: MongoDB Atlas
- Set `VITE_API_URL` on the frontend to your deployed API URL and `frontend_URL` on the backend to the frontend URL.
