import jsEslint from "@eslint/js";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
	{ ignores: ["dist", ".prettierrc.cjs", "eslint.config.js"] },
	{ languageOptions: { globals: globals.browser } },
	/* plugin */
	jsEslint.configs.recommended,
	eslintPluginJsxA11y.flatConfigs.recommended,
	...tsEslint.configs.strictTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	/* prettier */
	eslintPluginPrettier,
	/* app */
	{
		languageOptions: {
			parserOptions: {
				ecmaFeatures: { jsx: true },
				tsconfigRootDir: import.meta.dirname,
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				globals: { ...globals.browser },
			},
		},
	},
	{
		settings: {
			react: { version: "detect" },
		},
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		plugins: {
			react: eslintPluginReact,
			"react-hooks": eslintPluginReactHooks,
			"react-refresh": eslintPluginReactRefresh,
		},
		rules: {
			...eslintPluginReact.configs.recommended.rules,
			...eslintPluginReact.configs["jsx-runtime"].rules,
			...eslintPluginReactHooks.configs.recommended.rules,
			/* error */
			"prettier/prettier": ["error", { endeOfLine: "auto" }],
			"@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
			"@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
			/* warn */
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"@typescript-eslint/no-unused-vars": "warn",
			"@typescript-eslint/no-empty-object-type": "warn",
			"@typescript-eslint/no-unsafe-assignment": "warn",
			/* off */
			camelcase: "off",
			"@typescript-eslint/no-non-null-assertion": "off",
		},
	},
	/* disable */
	{
		files: ["**/*.{js,cjs,mjs,jsx,mjsx}", "vite.config.ts"],
		extends: [tsEslint.configs.disableTypeChecked],
	},
);
