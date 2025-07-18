import "./index.css";

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./app/App.tsx";
import "./i18n";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

const rootClassName = import.meta.env.VITE_ROOT_CLASS_NAME || "app-root";

rootElement.className = rootClassName;

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
