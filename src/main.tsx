import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FontLoader from "@/components/FontLoader";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FontLoader>
      <App />
    </FontLoader>
  </React.StrictMode>,
);
