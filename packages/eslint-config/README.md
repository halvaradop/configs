# `@halvaradop/eslint-config`

[![npm version](https://img.shields.io/npm/v/@halvaradop/eslint-config.svg)](https://www.npmjs.com/package/@halvaradop/eslint-config)
[![license](https://img.shields.io/npm/l/@halvaradop/eslint-config.svg)](https://github.com/halvaradop/configs/blob/main/LICENSE)

A professional, shareable ESLint configuration suite for modern JavaScript, TypeScript, React, and Next.js projects. Built with ESLint v9 flat config format, this package ensures consistent code quality and style across your development workflow.

> This package is part of the [@halvaradop/configs](https://github.com/halvaradop/configs) monorepo, providing standardized configurations for various development tools.

## Features

- `ESLint v9 Flat Config`: Built with the latest ESLint configuration format
- `Multiple Configurations`: Base, TypeScript, React, Next.js, and Vite specific configs
- `Composable Design`: Use configurations independently or combine them with spread operator
- `Comprehensive Rules`: Carefully curated rules for code quality and consistency
- `TypeScript Ready`: Full TypeScript support with type-aware linting
- `React Optimized`: Includes React hooks and JSX best practices
- `Next.js Enhanced`: Specific rules for Next.js App Router and Pages Router
- `Vite Optimized`: Specialized configuration for Vite + React + TypeScript projects
- `Prettier Integration`: Seamlessly works with Prettier formatting
- `Monorepo Support`: Includes Turbo and workspace-aware rules

## Installation

Install the package as a development dependency:

```bash
# Using pnpm (recommended)
pnpm add -D @halvaradop/eslint-config eslint

# Using npm
npm install -D @halvaradop/eslint-config eslint

# Using yarn
yarn add -D @halvaradop/eslint-config eslint
```

> **Note**: ESLint v9+ is required. Additional peer dependencies may be needed based on your configuration choice.

## Available Configurations

### Basic JavaScript Project

```ts
// eslint.config.{js,ts}
import { baseConfig } from "@halvaradop/eslint-config/base"

export default baseConfig
```

### TypeScript Project

```ts
// eslint.config.{js,ts}
import { tsConfig } from "@halvaradop/eslint-config/typescript"

export default tsConfig
```

### React with TypeScript

```ts
// eslint.config.{js,ts}
import { tsConfig } from "@halvaradop/eslint-config/typescript"
import { reactConfig } from "@halvaradop/eslint-config/react"

export default [...tsConfig, ...reactConfig]
```

### Next.js with TypeScript

```ts
// eslint.config.{js,ts}
import { tsConfig } from "@halvaradop/eslint-config/typescript"
import { nextConfig } from "@halvaradop/eslint-config/next"

export default [...tsConfig, ...nextConfig]
```

### Prettier

```ts
// eslint.config.{js,ts}
import { baseConfig } from "@halvaradop/eslint-config/base"
import { prettierConfig } from "@halvaradop/eslint-config/prettier"

export default [...baseConfig, ...prettierConfig]
```

### Turborepo

```ts
// eslint.config.{js,ts}
import { baseConfig } from "@halvaradop/eslint-config/base"
import { turboConfig } from "@halvaradop/eslint-config/turbo"

export default [...baseConfig, ...turboConfig]
```

### Custom Extensions

```ts
// eslint.config.{js,ts}
import { tsConfig } from "@halvaradop/eslint-config/typescript"
import { baseConfig } from "@halvaradop/eslint-config/base"

export default [
  ...baseConfig,
  ...tsConfig,
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    rules: {
      "no-console": "error",
      "prefer-const": "warn",
    },
  },
  {
    files: ["**/*.test.js", "**/*.test.ts", "**/*.spec.js", "**/*.spec.ts"],
    rules: {
      "no-console": "off",
    },
  },
]
```

## Configuration Combinations

All configurations build upon the base JavaScript configuration by default.

| Use Case             | Configuration                   | Import Path                                                                  |
| -------------------- | ------------------------------- | ---------------------------------------------------------------------------- |
| JavaScript           | Base                            | `@halvaradop/eslint-config/base`                                             |
| Prettier             | Prettier                        | `@halvaradop/eslint-config/prettier`                                         |
| Turborepo            | Turborepo                       | `@halvaradop/eslint-config/turbo`                                            |
| TypeScript           | TypeScript                      | `@halvaradop/eslint-config/typescript`                                       |
| React                | React                           | `@halvaradop/eslint-config/react`                                            |
| Next.js              | Next.js                         | `@halvaradop/eslint-config/next`                                             |
| React + TypeScript   | `[...tsConfig, ...reactConfig]` | `@halvaradop/eslint-config/react` and `@halvaradop/eslint-config/typescript` |
| Next.js + TypeScript | `[...tsConfig, ...nextConfig]`  | `@halvaradop/eslint-config/next` and `@halvaradop/eslint-config/typescript`  |

## Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --cache --cache-location .cache/.eslint-cache",
    "lint:fix": "eslint . --fix --cache --cache-location .cache/.eslint-cache",
    "lint:check": "eslint . --max-warnings 0"
  }
}
```

## Troubleshooting

### TypeScript Configuration Issues

Ensure your `tsconfig.json` is properly configured:

```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", "dist"]
}
```

## Related Packages

This package is part of the `@halvaradop/configs` ecosystem:

- [`@halvaradop/prettier-config`](https://github.com/halvaradop/configs/tree/master/packages/prettier-config) - Prettier configuration
- [`@halvaradop/tsconfig`](https://github.com/halvaradop/configs/tree/master/packages/tsconfig) - TypeScript configuration
- [`@halvaradop/tsup`](https://github.com/halvaradop/configs/tree/master/packages/tsup-config) - Tsup configuration

## License

MIT © [Hernan Alvarado](https://github.com/halvaradop)

## Changelog

See [CHANGELOG.md](https://github.com/halvaradop/configs/blob/master/packages/eslint-config/CHANGELOG.md) for details about changes in each version.

---

For more information about ESLint configuration options, visit the [official ESLint documentation](https://eslint.org/docs/latest/use/configure/).
