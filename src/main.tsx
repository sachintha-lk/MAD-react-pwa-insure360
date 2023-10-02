import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

// import { useRegisterSW } from "virtual:pwa-register/react";
import AuthProvider from "./context/AuthProvider.tsx";

// const updateSW = registerSW({
//   onNeedRefresh() {
//     if (confirm("New content available. Reload?")) {
//       updateSW(true);
//     }
//   },
// });

// ref: https://vite-pwa-org.netlify.app/frameworks/react.html

const intervalMS = 60 * 60 * 1000; // 1 hour
// const intervalMS = 30 * 1000; // 30 seconds

registerSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, intervalMS);
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
