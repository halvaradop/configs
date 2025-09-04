# `@halvaradop/prettier-config`

[![npm version](https://img.shields.io/npm/v/@halvaradop/prettier-config.svg)](https://www.npmjs.com/package/@halvaradop/prettier-config)
[![license](https://img.shields.io/npm/l/@halvaradop/prettier-config.svg)](https://github.com/halvaradop/configs/blob/master/LICENSE)

A shareable Prettier configuration for formatting `JavaScript`, `TypeScript`, `JSON`, `Markdown`, and `YAML` files across projects. This package ensures consistent formatting and code style throughout your development workflow.

> This package is part of the [@halvaradop/configs](https://github.com/halvaradop/configs) monorepo, providing standardized configurations for various development tools.

## Installation

Install the package as a development dependency in your project:

```bash
# Using pnpm (recommended)
pnpm add -D @halvaradop/prettier-config

# Using npm
npm install -D @halvaradop/prettier-config

# Using yarn
yarn add -D @halvaradop/prettier-config
```

> **Note**: This package requires Prettier ^2.0.0 as a peer dependency.

## Configuration Details

This configuration includes the following settings:

| Setting              | Value   | Description                                     |
| -------------------- | ------- | ----------------------------------------------- |
| `semi`               | `false` | No semicolons at the end of statements          |
| `tabWidth`           | `4`     | 4 spaces for indentation (default)              |
| `printWidth`         | `120`   | Maximum line length of 120 characters           |
| `trailingComma`      | `es5`   | Add trailing commas based on ES5 standards      |
| `overrides/tabWidth` | `2`     | 2 spaces for indentation (json,md,mdx,yaml,yml) |

## Usage

### Basic Setup

Create a `prettier.config.js` file in your project root and export the configuration:

```js
import { config } from "@halvaradop/prettier-config"

/** @type {import("prettier").Config} */
export default config
```

### Alternative Import Syntax

You can also use the default export directly:

```js
import prettierConfig from "@halvaradop/prettier-config"

/** @type {import("prettier").Config} */
export default prettierConfig
```

#### Customization

To extend or override the default configuration:

```js
import { config } from "@halvaradop/prettier-config"

/** @type {import("prettier").Config} */
export default {
  ...config,
  // Override specific options
  printWidth: 100,
  singleQuote: true,
  // Add new overrides
  overrides: [
    ...config.overrides,
    {
      files: "*.html",
      options: {
        tabWidth: 2,
      },
    },
  ],
}
```

### Package.json Configuration

You can also reference the configuration in your `package.json`:

```json
{
  "prettier": "@halvaradop/prettier-config"
}
```

## Scripts

Add these scripts to your `package.json` for easy formatting:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## Related Packages

This package is part of the `@halvaradop/configs` ecosystem:

- [`@halvaradop/eslint-config`](https://github.com/halvaradop/configs/tree/master/packages/eslint-config) - ESLint configuration
- [`@halvaradop/tsconfig`](https://github.com/halvaradop/configs/tree/master/packages/tsconfig) - TypeScript configuration
- [`@halvaradop/tsup`](https://github.com/halvaradop/configs/tree/master/packages/tsup-config) - Tsup configuration

## License

MIT © [Hernan Alvarado](https://github.com/halvaradop)

## Changelog

See [CHANGELOG.md](https://github.com/halvaradop/configs/blob/master/packages/prettier-config/CHANGELOG.md) for details about changes in each version.

---

For more information about Prettier configuration options, visit the [official Prettier documentation](https://prettier.io/docs/en/configuration.html).
