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

### Independent Usage

Each configuration can be used independently:

#### Base Configuration

**For:** Pure JavaScript projects

```js
// eslint.config.{js,ts}
import baseConfig from "@halvaradop/eslint-config/base"

export default baseConfig
```

#### TypeScript Configuration

**For:** TypeScript projects (self-contained, includes base rules)

```js
// eslint.config.{js,ts}
import tsConfig from "@halvaradop/eslint-config/typescript"

export default tsConfig
```

#### React Configuration

**For:** React projects (self-contained, includes base rules)

```js
// eslint.config.{js,ts}
import reactConfig from "@halvaradop/eslint-config/react"

export default reactConfig
```

#### Next.js Configuration

**For:** Next.js projects (self-contained, includes base and React rules)

```js
// eslint.config.{js,ts}
import nextConfig from "@halvaradop/eslint-config/next"

export default nextConfig
```

#### Vite Configuration

**For:** Vite + React + TypeScript projects (optimized for Vite's module resolution)

```js
// eslint.config.{js,ts}
import viteConfig from "@halvaradop/eslint-config/vite"

export default viteConfig
```

### Composable Usage

Combine configurations using the spread operator:

```js
// eslint.config.{js,ts}
import baseConfig from "@halvaradop/eslint-config/base"
import tsConfig from "@halvaradop/eslint-config/typescript"
import reactConfig from "@halvaradop/eslint-config/react"
import nextConfig from "@halvaradop/eslint-config/next"
import viteConfig from "@halvaradop/eslint-config/vite"

// Choose your combination:
export default [...baseConfig, ...tsConfig] // Base + TypeScript
// export default [...reactConfig, ...tsConfig]       // React + TypeScript
// export default [...nextConfig, ...tsConfig]        // Next.js + TypeScript
// export default viteConfig                          // Vite + React + TypeScript
```

## Usage Examples

### Basic JavaScript Project

```js
// eslint.config.{js,ts}
import baseConfig from "@halvaradop/eslint-config/base"

export default baseConfig
```

### TypeScript Project

```js
// eslint.config.{js,ts}
import tsConfig from "@halvaradop/eslint-config/typescript"

export default tsConfig
```

### React with TypeScript

```js
// eslint.config.{js,ts}
import reactConfig from "@halvaradop/eslint-config/react"
import tsConfig from "@halvaradop/eslint-config/typescript"

export default [...reactConfig, ...tsConfig]
```

### Next.js with TypeScript

```js
// eslint.config.{js,ts}
import nextConfig from "@halvaradop/eslint-config/next"
import tsConfig from "@halvaradop/eslint-config/typescript"

export default [...nextConfig, ...tsConfig]
```

### Vite + React + TypeScript (Recommended for Vite projects)

```js
// eslint.config.{js,ts}
import viteConfig from "@halvaradop/eslint-config/vite"

export default viteConfig
```

### Custom Extensions

```js
// eslint.config.{js,ts}
import baseConfig from "@halvaradop/eslint-config/base"
import tsConfig from "@halvaradop/eslint-config/typescript"

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

| Use Case             | Configuration                   | Import                                 |
| -------------------- | ------------------------------- | -------------------------------------- |
| JavaScript only      | Base                            | `@halvaradop/eslint-config/base`       |
| TypeScript only      | TypeScript                      | `@halvaradop/eslint-config/typescript` |
| React only           | React                           | `@halvaradop/eslint-config/react`      |
| Next.js only         | Next.js                         | `@halvaradop/eslint-config/next`       |
| Vite + React + TS    | Vite                            | `@halvaradop/eslint-config/vite`       |
| Base + TypeScript    | `[...baseConfig, ...tsConfig]`  | Direct composition                     |
| React + TypeScript   | `[...reactConfig, ...tsConfig]` | Direct composition                     |
| Next.js + TypeScript | `[...nextConfig, ...tsConfig]`  | Direct composition                     |

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

### Vite Projects

For Vite projects, use the dedicated Vite configuration:

```js
// eslint.config.{js,ts}
import viteConfig from "@halvaradop/eslint-config/vite"

export default viteConfig
```

This configuration:

- Disables project-based TypeScript rules for better Vite compatibility
- Includes browser and Node.js globals
- Optimizes for Vite's module resolution
- Handles both `.ts`/`.tsx` and `.js`/`.jsx` files properly

### Rule Conflicts

When combining configurations, some rules might conflict. The configurations are designed to handle common conflicts:

- TypeScript rules override JavaScript rules for `.ts`/`.tsx` files
- React rules are applied to `.jsx`/`.tsx` files
- Next.js rules include React rules and add Next.js-specific rules
- Vite configuration is optimized for Vite's build system and module resolution

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
