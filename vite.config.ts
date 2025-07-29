import { type ConfigEnv, defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

import tailwindcss from "@tailwindcss/vite";

export default ({ mode }: ConfigEnv) => {
	const env = loadEnv(mode, process.cwd());
	const build_path = env.VITE_BUILD_PATH;

	return defineConfig({
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
			outDir: !build_path ? "dist" : build_path,
		},
	});
};
