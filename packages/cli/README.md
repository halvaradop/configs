# @halvaradop/configs-cli

A powerful CLI tool for installing and managing development configurations from the @halvaradop/configs monorepo.

## Features

- 🚀 **Interactive Installation**: Choose which configurations to install with a beautiful interactive interface
- 🔧 **Multiple Configurations**: Support for ESLint, Prettier, TypeScript, and Tsup configurations
- ⚡ **Smart Overwrite Detection**: Automatically detects existing configurations and asks for confirmation
- 📦 **Package.json Integration**: Automatically adds relevant scripts to your package.json
- 🎨 **Beautiful UI**: Colored output and progress indicators for better user experience
- 🔄 **Flexible Options**: Support for command-line flags and non-interactive mode

## Installation

```bash
npm install -g @halvaradop/configs-cli
```

Or using pnpm:

```bash
pnpm add -g @halvaradop/configs-cli
```

## Usage

### Interactive Installation (Recommended)

```bash
configs-cli install
```

This will start an interactive session where you can:

- Select which configurations to install
- Choose specific configuration types (e.g., React vs Next.js for TypeScript)
- Confirm overwriting existing configurations

### Command Line Options

```bash
# Install specific packages
configs-cli install --packages eslint,prettier,typescript

# Force overwrite existing configurations
configs-cli install --force

# Skip confirmation prompts
configs-cli install --yes

# Combine options
configs-cli install --packages eslint,prettier --force --yes
```

### Individual Commands

You can also install configurations individually:

```bash
# Install ESLint configuration
configs-cli eslint

# Install Prettier configuration
configs-cli prettier

# Install TypeScript configuration
configs-cli ts

# Install Tsup configuration
configs-cli tsup
```

## Available Configurations

### ESLint Configurations

- **Base**: Basic ESLint rules for JavaScript/TypeScript
- **React**: ESLint rules optimized for React projects
- **Next.js**: ESLint rules for Next.js projects
- **Turbo**: ESLint rules for Turbo monorepos
- **TypeScript**: TypeScript-specific ESLint rules

### TypeScript Configurations

- **Base**: Basic TypeScript configuration
- **React**: TypeScript configuration for React projects
- **Next.js**: TypeScript configuration for Next.js projects

### Prettier Configuration

- Standard Prettier configuration with sensible defaults

### Tsup Configuration

- Optimized Tsup configuration for building TypeScript packages

## Configuration Files Created

The CLI tool creates the following configuration files:

- `eslint.config.js` - ESLint configuration
- `prettier.config.js` - Prettier configuration
- `tsconfig.json` - TypeScript configuration
- `tsup.config.js` - Tsup configuration

## Package.json Scripts

The CLI automatically adds relevant scripts to your package.json:

### ESLint Scripts

```json
{
  "scripts": {
    "lint": "eslint . --cache --cache-location .cache/.eslintcache",
    "lint:fix": "eslint . --fix --cache --cache-location .cache/.eslintcache"
  }
}
```

### Prettier Scripts

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

### TypeScript Scripts

```json
{
  "scripts": {
    "build": "tsc",
    "type-check": "tsc --noEmit"
  }
}
```

### Tsup Scripts

```json
{
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  }
}
```

## Examples

### Quick Start for a React Project

```bash
# Install all configurations for a React project
configs-cli install --packages eslint,prettier,typescript,tsup --yes
```

### Setting up a Next.js Project

```bash
# Interactive installation
configs-cli install
# Then select: ESLint (Next.js), Prettier, TypeScript (Next.js), Tsup
```

### Adding ESLint to an Existing Project

```bash
# Install only ESLint with React configuration
configs-cli eslint
# Then select React configuration when prompted
```

## Command Line Options

| Option       | Short | Description                                 |
| ------------ | ----- | ------------------------------------------- |
| `--force`    | `-f`  | Force overwrite existing configurations     |
| `--yes`      | `-y`  | Skip confirmation prompts                   |
| `--packages` | `-p`  | Comma-separated list of packages to install |

## Error Handling

The CLI tool includes comprehensive error handling:

- **File System Errors**: Graceful handling of permission issues and file system errors
- **Configuration Conflicts**: Detects existing configurations and asks for confirmation
- **Invalid Options**: Validates command-line arguments and provides helpful error messages
- **Network Issues**: Handles package installation failures gracefully

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

MIT License - see the LICENSE file for details.
