import { defineConfig, loadEnv } from "vite";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const siteUrl = env.VITE_SITE_URL || "http://localhost:5173";

	return {
		plugins: [tailwindcss()],
		define: {
			__SITE_URL__: JSON.stringify(siteUrl),
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	};
});
