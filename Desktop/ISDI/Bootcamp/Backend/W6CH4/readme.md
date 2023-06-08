# Bakcend node: TS - Eslint - Jest

## Setup

- npm i
- git init
- editorconfig
- gitignore
- TS

```shell
npm i -D typescript @types/node
```

- tsconfig

```shell
npx tsc --init
```

ESModule Config: package.json

- ESlint

```shell
npx eslint --init
npm i -D eslint-config-prettier
```

- Jest

```shell
npm i -D jest ts-jest @types/jest
```

- Jest config

```js
/ @type {import('ts-jest').JestConfigWithTsJest} */;

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["dist"],
  resolver: "jest-ts-webcompat-resolver",
  collectCoverageFrom: ["src//*.ts"],
  coveragePathIgnorePatterns: ["index.ts", "app.ts", "routers"],
};
```

Prettier config: package.json

```json

```
