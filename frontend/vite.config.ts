import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
// vitest/config re-exports Vite's defineConfig with test types merged in
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		// tanstackRouter MUST come before react — it processes route files first
		tanstackRouter({ target: "react", autoCodeSplitting: true }),
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			// `@/components/Foo` → `src/components/Foo`
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./src/test/setup.ts"],
		coverage: {
			provider: "v8",
			reporter: ["text", "html"],
			exclude: ["node_modules/", "src/test/"],
		},
	},
});
