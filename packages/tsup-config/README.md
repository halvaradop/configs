# `@halvaradop/tsup-config`

[![npm version](https://img.shields.io/npm/v/@halvaradop/tsup-config.svg)](https://www.npmjs.com/package/@halvaradop/tsup-config)
[![license](https://img.shields.io/npm/l/@halvaradop/tsup-config.svg)](https://github.com/halvaradop/configs/blob/master/LICENSE)

A robust, shareable `tsup` configuration for building scalable JavaScript and TypeScript projects.

> This package is part of the [@halvaradop/configs](https://github.com/halvaradop/configs) monorepo, which provides standardized configurations for various development tools.

## Installation

Install the package as a development dependency in your project:

```bash
# Using pnpm (recommended)
pnpm add -D @halvaradop/tsup-config

# Using npm
npm install -D @halvaradop/tsup-config

# Using yarn
yarn add -D @halvaradop/tsup-config
```

> **Peer Dependency:** Requires `tsup` version `^8.0.0` or higher.

## Configuration Overview

The default configuration includes:

| Setting  | Value            | Description                            |
| -------- | ---------------- | -------------------------------------- |
| `format` | `["esm", "cjs"]` | Output both ESM and CommonJS bundles   |
| `entry`  | `["src"]`        | Entry point(s) for the build           |
| `dts`    | `true`           | Generate TypeScript declaration files  |
| `clean`  | `true`           | Clean output directory before building |
| `minify` | `true`           | Minify the output bundles              |

## Usage

### Basic Setup

Create a `tsup.config.js` in your project root:

```js
import { defineConfig } from "tsup"
import { tsupConfig } from "@halvaradop/tsup-config"

export default defineConfig(tsupConfig)
```

### Alternative Import

You can also use the default export:

```js
import { defineConfig } from "tsup"
import tsupConfig from "@halvaradop/tsup-config"

export default defineConfig(tsupConfig)
```

### Customizing the Configuration

Extend or override the defaults as needed:

```js
import { defineConfig } from "tsup"
import { tsupConfig } from "@halvaradop/tsup-config"

export default defineConfig({
  ...tsupConfig,
  entry: ["src/index.ts"],
  sourcemap: true,
})
```

## Recommended Scripts

Add these scripts to your `package.json` for streamlined development:

```json
{
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup"
  }
}
```

## Related Packages

Explore other configurations in the `@halvaradop/configs` ecosystem:

- [`@halvaradop/eslint-config`](https://github.com/halvaradop/configs/tree/master/packages/eslint-config) – ESLint configuration
- [`@halvaradop/prettier-config`](https://github.com/halvaradop/configs/tree/master/packages/prettier-config) – Prettier configuration
- [`@halvaradop/tsconfig`](https://github.com/halvaradop/configs/tree/master/packages/tsconfig) – TypeScript configuration

## License

MIT © [Hernan Alvarado](https://github.com/halvaradop)

## Changelog

See [CHANGELOG.md](https://github.com/halvaradop/configs/blob/master/packages/tsup-config/CHANGELOG.md) for details about changes in each version.

---

For more details on `tsup`, see the [official documentation](https://tsup.egoist.dev/).
