🚢 Ship Maintenance Dashboard
A React-based dashboard application for managing ship maintenance tasks, components, and job assignments. This single-page application simulates user authentication, supports dynamic in-app notifications, and stores persistent data using localStorage.

🔗 Live Demo
View Deployed App

Note: Replace this with your actual deployment URL.

📦 Features
🛠 Component & Job Management: Add, edit, and delete components and job tasks linked to ships.

🧭 Ship Registry: Manage ship records and associated maintenance data.

🔐 Simulated Authentication: User login and route protection (mocked authentication logic).

🧠 In-App Notifications: Dynamic toast notifications on events like creation, deletion, updates.

💾 Persistent State: Uses localStorage for saving all data (no backend).

⚡ Vite + React + Tailwind: Fast development environment using modern tooling.

📁 Project Structure
php
Copy
Edit
Ship_Maintenance_Dashboard-React/
│
├── public/                 # Static assets
├── src/                    # React application source code
│   ├── components/         # Reusable UI components
│   ├── pages/              # Pages like Dashboard, Login, etc.
│   ├── data/               # Sample static data or utils
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
