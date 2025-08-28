# @halvaradop/create-config

A powerful CLI tool for installing and managing development configurations from the @halvaradop/configs monorepo.

## Features

- **Interactive Installation**: Choose which configurations to install with a beautiful interactive interface
- **Multiple Configurations**: Support for ESLint, Prettier, TypeScript, and Tsup configurations
- **Smart Overwrite Detection**: Automatically detects existing configurations and asks for confirmation
- **Package.json Integration**: Automatically adds relevant scripts to your package.json
- **Beautiful UI**: Colored output and progress indicators for better user experience
- **Flexible Options**: Support for command-line flags and non-interactive mode

## Installation

```bash
pnpm install -g @halvaradop/create-config
```

## Usage

### Interactive Installation (Recommended)

```bash
# Using pnpm create (recommended)
pnpm create halvaradop-config

# Using pnpm dlx
pnpm dlx @halvaradop/create-config
```

### Command Line Examples

```bash
# Install specific configuration(s)
pnpm create halvaradop-config typescript

# Force overwrite existing configurations
pnpm create halvaradop-config typescript --force
```

### Install Individual Configurations

You can install configurations individually as needed:

```bash
# Install ESLint configuration
pnpm create halvaradop-config eslint

# Install Prettier configuration
pnpm create halvaradop-config prettier

# Install TypeScript configuration
pnpm create halvaradop-config ts

# Install Tsup configuration
pnpm create halvaradop-config tsup
```

## Available Configurations

### ESLint

- **Base**: Basic ESLint rules for JavaScript/TypeScript
- **React**: Rules for React projects
- **Next.js**: Rules for Next.js projects
- **Turbo**: Rules for Turbo monorepos
- **Prettier**: Rules for Prettier monorepos
- **TypeScript**: TypeScript-specific rules

#### Example ESLint Scripts

```json
{
  "scripts": {
    "lint": "eslint . --cache --cache-location .cache/.eslintcache",
    "lint:fix": "eslint . --fix --cache --cache-location .cache/.eslintcache"
  }
}
```

### TypeScript

- **Base**: Basic TypeScript configuration
- **React**: For React projects
- **Next.js**: For Next.js projects

#### Example TypeScript Scripts

```json
{
  "scripts": {
    "build": "tsc",
    "type-check": "tsc --noEmit"
  }
}
```

### Prettier

- Standard Prettier configuration with sensible defaults

#### Example Prettier Scripts

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

### Tsup

- Optimized configuration for building TypeScript packages

#### Example Tsup Scripts

```json
{
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  }
}
```

## Configuration Files Created

The CLI tool creates the following configuration files:

- `eslint.config.js` - ESLint configuration
- `prettier.config.js` - Prettier configuration
- `tsconfig.json` - TypeScript configuration
- `tsup.config.js` - Tsup configuration

## Command Line Options

| Option    | Short | Description                             |
| --------- | ----- | --------------------------------------- |
| `--force` | `-f`  | Force overwrite existing configurations |

## Related Packages

This package is part of the `@halvaradop/configs` ecosystem:

- [`@halvaradop/eslint-config`](https://github.com/halvaradop/configs/tree/master/packages/eslint-config) - ESLint configuration
- [`@halvaradop/prettier-config`](https://github.com/halvaradop/configs/tree/master/packages/prettier-config) - Prettier configuration
- [`@halvaradop/tsconfig`](https://github.com/halvaradop/configs/tree/master/packages/tsconfig) - TypeScript configuration
- [`@halvaradop/tsup`](https://github.com/halvaradop/configs/tree/master/packages/tsup-config) - Tsup configuration

## License

MIT © [Hernan Alvarado](https://github.com/halvaradop)

## Changelog

See [CHANGELOG.md](https://github.com/halvaradop/configs/blob/master/packages/eslint-config/CHANGELOG.md) for details about changes in each version.

---

For more information about ESLint configuration options, visit the [official ESLint documentation](https://eslint.org/docs/latest/use/configure/).
