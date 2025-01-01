import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

import path from "path";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "@seung",
			formats: ["es", "cjs"],
			fileName: (f) => `index.${f}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "styled-components"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"styled-components": "styled",
				},
			},
		},
		commonjsOptions: {
			esmExternals: ["react"],
		},
	},
});
