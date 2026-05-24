import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importX from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y";
import unicorn from "eslint-plugin-unicorn";

export default tseslint.config(
	// [0] Global ignores
	{
		ignores: ["dist", "node_modules"],
	},

	// [1] TypeScript — strict + stylistic presets with targeted overrides
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			js.configs.recommended,
			...tseslint.configs.strict,
			...tseslint.configs.stylistic,
		],
		languageOptions: {
			ecmaVersion: "latest",
			globals: globals.browser,
		},
		rules: {
			// The ! operator is legitimate in React event handlers (e.g. getElementById)
			"@typescript-eslint/no-non-null-assertion": "warn",
			// Require return types on exported functions only, not inline callbacks
			"@typescript-eslint/explicit-function-return-type": [
				"error",
				{
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
					allowHigherOrderFunctions: true,
					allowDirectConstAssertionInArrowFunctions: true,
				},
			],
		},
	},

	// [2] React — flat recommended + jsx-runtime (no `import React` needed in React 19)
	{
		files: ["**/*.{ts,tsx}"],
		...pluginReact.configs.flat.recommended,
		...pluginReact.configs.flat["jsx-runtime"],
		settings: {
			react: { version: "detect" },
		},
		rules: {
			...pluginReact.configs.flat.recommended.rules,
			...pluginReact.configs.flat["jsx-runtime"].rules,
			// Array index keys cause subtle stale-render bugs
			"react/no-array-index-key": "error",
			// Auto-fixable: <Foo></Foo> → <Foo />
			"react/self-closing-comp": "error",
			// Auto-fixable: removes unnecessary <>...</> wrappers
			"react/jsx-no-useless-fragment": "error",
			// Inline component definitions break Fast Refresh and cause remount loops
			"react/no-unstable-nested-components": "error",
		},
	},

	// [3] React Hooks — recommended-latest ruleset
	{
		files: ["**/*.{ts,tsx}"],
		plugins: { "react-hooks": reactHooks },
		rules: reactHooks.configs["recommended-latest"].rules,
	},

	// [4] React Refresh — unchanged from scaffold
	{
		files: ["**/*.{ts,tsx}"],
		plugins: { "react-refresh": reactRefresh },
		rules: {
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
		},
	},

	// [5] Import ordering and cycle detection
	{
		files: ["**/*.{ts,tsx}"],
		plugins: { "import-x": importX },
		settings: {
			"import-x/resolver-next": [importX.createNodeResolver()],
		},
		rules: {
			"import-x/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
					],
					"newlines-between": "always",
					alphabetize: { order: "asc", caseInsensitive: true },
				},
			],
			"import-x/no-duplicates": "error",
			"import-x/no-cycle": "error",
			"import-x/no-self-import": "error",
		},
	},

	// [6] Accessibility — all rules as warnings so they don't block development
	{
		files: ["**/*.{ts,tsx}"],
		plugins: jsxA11y.flatConfigs.recommended.plugins,
		rules: Object.fromEntries(
			Object.entries(jsxA11y.flatConfigs.recommended.rules).map(
				([rule, severity]) => [rule, severity === "error" ? "warn" : severity],
			),
		),
	},

	// [7] Unicorn — selective modern JS patterns only (not unicorn/all)
	{
		files: ["**/*.{ts,tsx}"],
		plugins: { unicorn },
		rules: {
			"unicorn/prefer-node-protocol": "error",
			"unicorn/no-array-for-each": "error",
			"unicorn/prefer-query-selector": "error",
			"unicorn/no-useless-undefined": "error",
			"unicorn/prefer-logical-operator-over-ternary": "warn",
		},
	},
);
