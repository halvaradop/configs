# CHANGELOG - `@halvaradop/eslint-config`

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2025-10-19

### Changed

- Ignored configuration files from common libraries and packages like `tsup`, `tailwind`, `vite`, `vitest`, and more to avoid ESLint errors that are unrecognizable by typescript-eslint. [#20](https://github.com/halvaradop/configs/pull/20)

- Updated the `tsconfigRootDir` and other `parserOptions` in the TypeScript configuration to properly resolve project references and avoid parsing errors. [#20](https://github.com/halvaradop/configs/pull/20)

## [1.2.3] - 2025-10-19

### Changed

- Ignored configuration files from common libraries and packages like `tsup`, `tailwind`, `vite`, `vitest`, and more to avoid ESLint errors that are unrecognizable by typescript-eslint. [#20](https://github.com/halvaradop/configs/pull/20)

## [1.2.2] - 2025-10-19

### Changed

- Updated the `tsconfigRootDir` in `parserOptions` of the TypeScript configuration to avoid errors unrecognizable by typescript-eslint. [#20](https://github.com/halvaradop/configs/pull/20)

## [1.2.1] - 2025-10-19

### Changed

- Updated the `parserOptions` in the TypeScript configuration and added configuration files to ignore list to avoid errors unrecognizable by typescript-eslint. [#20](https://github.com/halvaradop/configs/pull/20)

## [1.2.0] - 2025-09-04

### Changed

- Renamed the entry point for `Next.js` applications from `next` to `nextjs` to better reflect its purpose as the ESLint configuration for Next.js projects. [#18](https://github.com/halvaradop/configs/pull/18)

- Excluded unnecessary files from being published to npm, ensuring only the `dist` folders are included. [#19](https://github.com/halvaradop/configs/pull/19)

## [1.1.0] - 2025-08-26

### Added

- Added support for `.ts` file extensions in the configuration. [#14](https://github.com/halvaradop/configs/pull/14)

- Introduced two new configurations: one for `turborepo` compatibility via the `turbo` entry point, and another for `prettier` integration. [#14](https://github.com/halvaradop/configs/pull/14)

### Changed

- Renamed the `config` configuration array rules to `baseConfig`, `tsConfig`, `reactConfig`, and `nextConfig` for improved clarity. [#14](https://github.com/halvaradop/configs/pull/14)

## [1.0.0] - 2025-08-08

### Added

- Introduced a shareable ESLint configuration supporting `JavaScript`, `TypeScript`, `React`, and `Next.js`. This configuration enforces high code quality standards to ensure consistency and maintainability across projects. [#6](https://github.com/halvaradop/configs/pull/6)
