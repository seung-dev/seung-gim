import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tsconfigPaths(), tailwindcss()],
	server: {
		host: "0.0.0.0",
		proxy: {
			"^/rest": {
				target: "http://127.0.0.1:8080",
				changeOrigin: false,
				secure: false,
				ws: true,
			},
		},
	},
	build: {
		outDir: "w:/apps/ops/seung-kim",
	},
});
