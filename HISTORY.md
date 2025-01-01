# History

##### Dependencies

- prettier
- @trivago/prettier-plugin-sort-imports

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

Prettier Command 설정

```cmd
notepad package.json
```

```cmd
npm run prettier
```
