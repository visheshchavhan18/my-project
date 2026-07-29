# Roster — Employee Management Dashboard

A responsive employee management dashboard built with React.js and React Router. Authentication runs against the [DummyJSON](https://dummyjson.com) auth API; the employee roster itself is a local Indian employee dataset (`src/data/employees.js`) rather than an external API.

**Live demo:** _add your Vercel/Netlify URL here_
**Repo:** https://github.com/visheshchavhan18/my-project.git

## Features

- **Authentication** — Login screen against DummyJSON's `POST /auth/login`, token stored in `localStorage`, protected routes redirect to `/login` when signed out.
- **Employee directory** — Paginated, sortable table (name, age, email) sourced from a local Indian employee dataset (40 employees across Engineering, Product, Design, Sales, Marketing, Finance, HR, Operations, Legal, and Customer Support).
- **Search** — Debounced (350ms) search by name or email, so it doesn't refilter on every keystroke.
- **Filter** — By department and gender, combinable with search and sort.
- **CRUD** — Add, edit, and remove employees via modals; changes go through a small shared in-memory store (`src/data/employees.js`) so the directory and detail page stay in sync as you navigate.
- **Employee detail page** — `/employees/:id` with full profile and inline edit/delete.
- **Pagination** — 10 per page with numbered controls and item counts.
- **Responsive UI** — Works from mobile to desktop; sidebar collapses on small screens.
- **Loading / error / empty states** — Skeleton loaders, retry-able error states, and empty-state messaging throughout.
- **Dark mode** — Toggle in the top bar, persisted to `localStorage`, respects system preference on first load.
- **Toasts** — Success/error feedback for every mutation (`react-hot-toast`).
- **CSV export** — Exports the currently filtered employee list to `employees.csv`.

> **Note on persistence:** the employee store lives in memory (`src/data/employees.js`), so add/edit/delete changes persist while you navigate the app but reset on a full page reload. To back it with a real database, swap the functions in that file for API calls.

## Tech stack

React 18 · React Router 6 · Axios · Tailwind CSS · react-hot-toast · Vite

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Demo login

The login form is pre-filled with a valid DummyJSON test account:

- **Username:** `emilys`
- **Password:** `emilyspass`

(Any valid [DummyJSON user](https://dummyjson.com/users) works — see their docs for the full list.)

### Build for production

```bash
npm run build
npm run preview
```

## Deployment

This is a Vite SPA, so client-side routing needs a rewrite rule:

- **Vercel:** `vercel.json` (included) rewrites all paths to `index.html`.
- **Netlify:** `public/_redirects` (included) does the same.

Push to GitHub, then import the repo into Vercel or Netlify — no extra configuration needed.

## Project structure

```
src/
  api/            axios instance (used for DummyJSON login only)
  context/        AuthContext, ThemeContext
  components/     Shell, EmployeeTable, Toolbar, modals, states, icons
  data/           employees.js — local Indian employee dataset + store helpers
  pages/          Login, Dashboard, EmployeeDetail, NotFound
  hooks/          useDebounce
  utils/          csvExport
```

## Design notes

Employees are color-coded by department (a deterministic hash → color mapping used for both the table's department chips and avatar tints), so the roster reads as one coherent system rather than a plain data grid. Typography pairs Space Grotesk (display) with Inter (body) and JetBrains Mono for IDs.
