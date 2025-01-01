# History

##### Dependencies

- vite@latest
- prettier
- @trivago/prettier-plugin-sort-imports
- @eslint/config@latest

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
