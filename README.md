# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Backend Server

This project uses a backend server created with the `json-server` npm package, hosted on port 3000. This allows for easy mocking of a RESTful API with zero coding.

To start the server, run the following command:

```bash
npx json-server --watch db.json --port 3000
```

Make sure to replace `db.json` with the path to your JSON file.

