# History

##### Dependencies

- vite@latest
- prettier
- @trivago/prettier-plugin-sort-imports
- @eslint/config@latest
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-config-prettier
- husky
- @types/node
- vite-tsconfig-paths

##### Dev Dependencies

### 0-0. Creating a Vite Application

```cmd
npm create vite@latest . -- --template react-swc-ts
```

```cmd
npm install
```

### 0-1. Configuring Prettier

```cmd
npm install --save-dev prettier @trivago/prettier-plugin-sort-imports
```

Prettier 설정

```cmd
echo. > ".prettierrc.cjs"
```

```cmd
echo. > ".prettierignore"
```

Visual Studio Code 설정

```cmd
mkdir .vscode
```

```cmd
echo. > .vscode\settings.json
```

Git 설정

```cmd
notepad .gitignore
```

```cmd
echo. > .gitattributes
```

Prettier Script 설정

```cmd
notepad package.json
```

```cmd
npm run prettier
```

### 0-2. Configuring ESLint

ESLint init

- To check syntax and find problems
- JavaScript modules (import/export)
- React
- Typescript
- Browser
- eslint, globals, @eslint/js, typescript-eslint, eslint-plugin-react

```cmd
npm init @eslint/config@latest
```

```cmd
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-config-prettier
```

ESLint 설정

```cmd
notepad eslint.config.js
```

ESLint Script 수정

```cmd
notepad package.json
```

```cmd
npm run lint
```

### 0-3. Configuring Husky

```cmd
npm install --save-dev husky
```

```cmd
npx husky init
```

```cmd
echo "npm run prettier" > .husky\pre-commit
```

```cmd
echo "npm run lint" > .husky\pre-push
```

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks add .
```

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks reset .
```

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks commit -m "feat: Configuring Husky"
```

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks push -v --set-upstream origin loc/setup:loc/setup
```

### 0-4. Configuring Path Alias

```cmd
npm install --save-dev vite-tsconfig-paths
```

Path 설정

```cmd
notepad vite.config.ts
```

```cmd
notepad tsconfig.app.json
```
