# `@halvaradop/tsconfig`

[![npm version](https://img.shields.io/npm/v/@halvaradop/tsconfig.svg)](https://www.npmjs.com/package/@halvaradop/tsconfig)
[![license](https://img.shields.io/npm/l/@halvaradop/tsconfig.svg)](https://github.com/halvaradop/configs/blob/master/LICENSE)

A shareable TypeScript configuration that supports `TypeScript Default Project`, `React`, and `Next.js` templates. This package ensures correct configuration based on the type of project.

> This package is part of the [@halvaradop/configs](https://github.com/halvaradop/configs) monorepo, providing standardized configurations for various development tools.

## Installation

Install the package as a development dependency in your project:

```bash
# Using pnpm (recommended)
pnpm add -D @halvaradop/tsconfig

# Using npm
npm install -D @halvaradop/tsconfig

# Using yarn
yarn add -D @halvaradop/tsconfig
```

> **Note**: This package requires TypeScript ^5.0.0 as a peer dependency.

## Usage

### Basic Setup

Create a `tsconfig.json` file in your project root and import the TypeScript configuration according to your requirements:

```json
{
  "extends": "@halvaradop/tsconfig/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "exclude": ["node_modules"]
}
```

### React Setup

Import the React configuration using your `tsconfig.json` file in your project root:

```json
{
  "extends": "@halvaradop/tsconfig/react.json",
  "exclude": ["node_modules"]
}
```

### Next.js Setup

Import the Next.js configuration using your `tsconfig.json` file in your project root:

```json
{
  "extends": "@halvaradop/tsconfig/nextjs.json",
  "exclude": ["node_modules"]
}
```

## Scripts

Add these scripts to your `package.json` for easy formatting:

```json
{
  "scripts": {
    "dev": "tsc -w",
    "build": "tsc",
    "check-types": "tsc --noEmit",
    "config": "tsc --showConfig"
  }
}
```

## Related Packages

This package is part of the `@halvaradop/configs` ecosystem:

- [`@halvaradop/eslint-config`](https://github.com/halvaradop/configs/tree/master/packages/eslint-config) - ESLint configuration
- [`@halvaradop/prettier-config`](https://github.com/halvaradop/configs/tree/master/packages/prettier-config) - Prettier configuration
- [`@halvaradop/tsup-config`](https://github.com/halvaradop/configs/tree/master/packages/tsup-config) - Tsup configuration

## License

MIT © [Hernan Alvarado](https://github.com/halvaradop)

## Changelog

See [CHANGELOG.md](https://github.com/halvaradop/configs/blob/master/packages/tsconfig/CHANGELOG.md) for details about changes in each version.

---

For comprehensive details on TypeScript configuration options, refer to the [official TypeScript documentation](https://www.typescriptlang.org/tsconfig).
