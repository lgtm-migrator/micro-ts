# micro-ts

[![Node.js CI](https://github.com/Akagi201/micro-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/Akagi201/micro-ts/actions/workflows/ci.yml)

Typescript Node.js backend boilerplate code

## Features

- [x] [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) - modern JavaScript module system
- [x] [ESLint](https://github.com/eslint/eslint) - static linting
- [x] [Jest](https://jestjs.io/) - unit testing
- [x] [Prettier](https://prettier.io/) - code formatter
- [x] [EditorConfig](https://editorconfig.org/) - file format
- [x] [Volta](https://volta.sh/) - Node.js version manager
- [x] [GitHub Actions](https://github.com/features/actions) - GitHub CI/CD
- [ ] [Parcel](https://github.com/parcel-bundler/parcel) - modern JS build tool

## Install Deps

```sh
npm install
```

## NPM Scripts

- `clean`: remove coverage data, Jest cache and transpiled files
- `prebuild`: lint source files and tests before building
- `build`: transpile TypeScript to ES6
- `build:watch`: interactive watch mode to automatically transpile source files
- `lint`: lint source files and tests
- `test`: run tests
- `test:watch`: interactive watch mode to automatically re-run tests

## Refs

- [convert to ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- [dynamic import()](https://v8.dev/features/dynamic-import)
- [node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)
