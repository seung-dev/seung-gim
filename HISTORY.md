##### Vite

```
npm create vite@latest . -- --template react-swc-ts
```

```
npm install --save-dev @types/node
```

##### Git

```
vi .gitattributes
```

##### Prettier

```
npm install --save-dev prettier @trivago/prettier-plugin-sort-imports
```

```
vi .prettierrc.cjs
```

```
vi .prettierignore
```

```
mkdir .vscode
```

```
vi .vscode/settings.json
```

```
npx prettier . --write
```

```
npm pkg set scripts.prettier="prettier --cache --write ."
```

```
npm run prettier
```

##### ESLint

```
npm init @eslint/config@latest
```

```
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-config-prettier
```

```
vi eslint.config.ts
```

```
npm pkg set scripts.eslint="eslint --cache ."
```

```
npm run eslint
```

##### Husky

```
npm install --save-dev husky lint-staged
```

```
npx husky init
```

```
npm pkg set scripts.prepare="husky"
```

```
npm run prepare
```

```
echo "npx lint-staged" > .husky/pre-commit
```

```
vi package.json
...
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "eslint --fix"
    ]
  },
...
```

##### i18next

```
npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend
```

```
npm install --save-dev @types/i18next
```

##### Run

```
npm pkg set scripts.loc="vite --mode loc --port 11006 --host 0.0.0.0"
```

```
npm run loc
```

##### Build

```
npm pkg set scripts.build="tsc -b && vite build --emptyOutDir"
```

```
npm run build
```

##### Path Alias

```
npm install --save-dev vite-tsconfig-paths
```

```
vi vite.config.ts
...
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
});
...
```

```
vi tsconfig.app.json
...
{
	"compilerOptions": {
		...
		/* Path Alias */
		"baseUrl": "",
		"paths": { "@/*": ["src/*"] }
	},
...
```

##### Language

```
npm install @fontsource/roboto
```

```
vi index.css

...
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
...
```

```
vi index.css

...
@import url("/fonts/pretendard-gov.css");

font-family: "Pretendard GOV Variable", "Pretendard GOV", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
...
```

##### Design

```
npm install @mui/material @emotion/react @emotion/styled
```

```
npm install @mui/x-tree-view
```

```
npm install @mui/x-data-grid
```

```
npm install dayjs
```

```
npm install @mui/x-date-pickers
```

```
npm install @mui/x-charts
```

```
npm install notistack
```

```
npm install lucide-react
```

```
npm install tailwindcss @tailwindcss/vite
```

```
vi vite.config.ts
...
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
});
...
```

```
vi src/index.css
...
@import "tailwindcss";
...
```

##### MISC

```
npm install react-router
```

```
npm install react-hook-form
```

```
npm install zustand
```

```
npm install @tanstack/react-query
```

```
npm install axios
```

```
npm install cripto-js
```

```
npm install --save-dev @types/crypto-js
```

```
npm install react-markdown
```
