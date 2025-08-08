# `@halvaradop/configs`

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Turbo](https://img.shields.io/badge/Built%20with-Turbo-black)](https://turbo.build/)

A comprehensive monorepo of shareable configurations for modern JavaScript and TypeScript development. This collection provides professional, battle-tested configurations for TypeScript, bundling, linting, and code formatting that ensure high code quality and consistency across all your projects.

## Packages

This monorepo contains four independent, production-ready configuration packages:

### [@halvaradop/tsconfig](./packages/tsconfig/)

**TypeScript Configuration Presets**

- Base, React, and Next.js configurations
- Strict type checking with modern ES features
- Optimized for different project types
- Full path mapping and module resolution

```bash
pnpm add -D @halvaradop/tsconfig
```

### [@halvaradop/prettier-config](./packages/prettier-config/)

**Code Formatting Configuration**

- Consistent formatting for JS, TS, JSON, Markdown, and YAML
- Optimized for readability and git diffs
- Integrated with popular editors
- Supports multiple file types with custom rules

```bash
pnpm add -D @halvaradop/prettier-config
```

### [@halvaradop/eslint-config](./packages/eslint-config/)

**Comprehensive Linting Rules**

- ESLint v9 flat config format
- Base, TypeScript, React, and Next.js presets
- 100+ carefully curated rules for code quality
- Automatic fixes and intelligent suggestions
- Performance and accessibility optimizations

```bash
pnpm add -D @halvaradop/eslint-config
```

### [@halvaradop/tsup-config](./packages/tsup-config/)

**Modern Build Configuration**

- Fast TypeScript/JavaScript bundling with tsup
- Dual ESM/CommonJS output
- Automatic TypeScript declaration generation
- Tree-shaking and minification
- Source maps and watch mode support

```bash
pnpm add -D @halvaradop/tsup-config
```

## About

This monorepo is built on a modern toolchain that streamlines development and enforces best practices. By integrating tools like [typescript-eslint](https://typescript-eslint.io/) for advanced TypeScript linting, [Prettier](https://prettier.io/) for consistent code formatting, [tsup](https://tsup.egoist.dev/) for efficient bundling, and [Turbo](https://turbo.build/) for scalable task orchestration, it ensures high-quality, maintainable code and a smooth developer experience across all projects.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome and appreciate contributions to the `@halvaradop/configs` monorepo. Whether you want to report bugs, suggest enhancements, or submit pull requests, your input helps us improve and grow the project. All experience levels are encouraged to participate!

To get started, please read our [Contributing Guide](https://github.com/halvaradop/ui/blob/master/docs/CONTRIBUTING.md). All contributors are expected to follow our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/halvaradop">Hernan Alvarado</a>
</p>
