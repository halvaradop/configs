# `@halvaradop/eslint-config`

[![npm version](https://img.shields.io/npm/v/@halvaradop/eslint-config.svg)](https://www.npmjs.com/package/@halvaradop/eslint-config)
[![license](https://img.shields.io/npm/l/@halvaradop/eslint-config.svg)](https://github.com/halvaradop/configs/blob/main/LICENSE)

A professional, shareable ESLint configuration suite for modern JavaScript, TypeScript, React, and Next.js projects. Built with ESLint v9 flat config format, this package ensures consistent code quality and style across your development workflow.

> This package is part of the [@halvaradop/configs](https://github.com/halvaradop/configs) monorepo, providing standardized configurations for various development tools.

## Features

- `ESLint v9 Flat Config`: Built with the latest ESLint configuration format
- `Multiple Configurations`: Base, TypeScript, React, and Next.js specific configs
- `Comprehensive Rules`: Carefully curated rules for code quality and consistency
- `TypeScript Ready`: Full TypeScript support with type-aware linting
- `React Optimized`: Includes React hooks and JSX best practices
- `Next.js Enhanced`: Specific rules for Next.js App Router and Pages Router
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

### Base Configuration

**For:** Pure JavaScript projects or as a foundation for other configs

```js
// eslint.config.{js,ts}
import { config } from "@halvaradop/eslint-config/base"

/** @type {import("eslint").Linter.Config} */
export default config
```

### TypeScript Configuration

**For:** TypeScript projects (extends base configuration)

```js
// eslint.config.{js,ts}
import { config } from "@halvaradop/eslint-config/typescript"

/** @type {import("eslint").Linter.Config} */
export default config
```

### React Configuration

**For:** React projects (extends base configuration)

```js
// eslint.config.{js,ts}
import { config } from "@halvaradop/eslint-config/react"

/** @type {import("eslint").Linter.Config} */
export default config
```

### Next.js Configuration

**For:** Next.js projects (extends base + React configurations)

```js
// eslint.config.{js,ts}
import { config } from "@halvaradop/eslint-config/nextjs"

/** @type {import("eslint").Linter.Config} */
export default config
```

## Usage Examples

### Basic JavaScript Project

```js
// eslint.config.{js,ts}
import { config } from "@halvaradop/eslint-config/base"

/** @type {import("eslint").Linter.Config} */
export default config
```

### TypeScript Project

```js
// eslint.config.{js,ts}
import { config } from "@halvaradop/eslint-config/typescript"

/** @type {import("eslint").Linter.Config} */
export default config
```

### React with TypeScript

```js
// eslint.config.{js,ts}
import { config as baseConfig } from "@halvaradop/eslint-config/base"
import { config as reactConfig } from "@halvaradop/eslint-config/react"
import { config as tsConfig } from "@halvaradop/eslint-config/typescript"

export default [...baseConfig, ...tsConfig, ...reactConfig]
```

### Next.js with TypeScript

```js
// eslint.config.{js,ts}
import { config as baseConfig } from "@halvaradop/eslint-config/base"
import { config as nextConfig } from "@halvaradop/eslint-config/nextjs"
import { config as tsConfig } from "@halvaradop/eslint-config/typescript"

export default [...baseConfig, ...tsConfig, ...nextConfig]
```

### Custom Extensions

```js
// eslint.config.{js,ts}
import { config } from "@halvaradop/eslint-config/base"

export default [
  ...config,
  {
    files: ["**/*.js"],
    rules: {
      "no-console": "error",
      "prefer-const": "warn",
    },
  },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    rules: {
      "no-console": "off",
    },
  },
]
```

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
