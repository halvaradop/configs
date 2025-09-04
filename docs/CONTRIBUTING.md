# Contributing to @halvaradop/configs

Thank you for your interest in contributing to the `@halvaradop/configs` monorepo. This guide will help you contribute effectively and follow the structure and conventions of the monorepo.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
   1. [Prerequisites](#prerequisites)
   2. [Installation](#installation)
3. [Development Workflow](#development-workflow)
   1. [Common Development Commands](#common-development-commands)
4. [Documentation](#documentation)
   1. [Changelogs](#changelogs)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Project Structure](#project-structure)

---

## Code of Conduct

All contributors must adhere to our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md). Please read it before participating.

---

## Getting Started

### Prerequisites

- Node.js v18+
- pnpm v8+
- Git

### Installation

```bash
corepack enable
git clone git@github.com:halvaradop/configs.git
cd configs
pnpm install
```

---

## Development Workflow

### Common Development Commands

Here are some essential commands to streamline your development process in this monorepo:

```bash
pnpm build         # Build all packages in the monorepo
pnpm dev           # Start the development server (if available)
pnpm lint          # Lint all source files
pnpm lint:fix      # Automatically fix linting issues
pnpm format        # Format code with Prettier
pnpm format:check  # Check code formatting without modifying files
pnpm check-types   # Run TypeScript type checks across packages
pnpm clean         # Remove build artifacts and reset the workspace
```

Use these commands from the repository root unless otherwise specified. Refer to each package's README for additional scripts or details.

---

## Documentation

### Changelogs

Follow the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.  
Each package has its own `CHANGELOG.md` file.

```md
## [Unreleased]

### Added

- New feature description [#123](https://github.com/halvaradop/ui/pull/123)
```

---

## Commit Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for all commit messages. This helps automate changelogs and maintain a clear project history.

```bash
feat(configs): add `react-vite-config` package
fix(eslint): correct styling rules
docs(standards): update `README.md` usage example
chore(deps): upgrade dependencies
```

---

## Pull Request Process

1. Use a clear, descriptive title and detailed body for your pull request.
2. Reference any related issues or pull requests in the description.
3. Ensure all checks pass, including linting (`pnpm lint`).
4. Obtain approval from a code owner before merging.

Only maintainers listed in the [CODEOWNERS](https://github.com/halvaradop/configs/blob/master/docs/CODEOWNERS) file can approve pull requests for their designated areas.

---

## Project Structure

```
@halvaradop/configs/
├── docs/                   # Documentation
├── packages/               # Individual configuration packages
│   ├── create-config/      # CLI tool to set up the configs provided by `@halvaradop/configs`
│   ├── eslint-config/      # ESLint configurations
│   ├── prettier-config/    # Prettier configurations
│   ├── tsconfig/           # TypeScript configurations
│   └── tsup-config/        # Tsup build configurations
├── package.json            # Root package.json
├── turbo.json              # Turbo configuration
└── README.md               # Main documentation
```

---

Thank you for contributing to `@halvaradop/configs`! Your contributions help make development tools better for everyone. 🎉
