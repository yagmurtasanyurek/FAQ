import react from "react";
import reactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);
root.render(<App />);
