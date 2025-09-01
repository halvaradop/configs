# CHANGELOG - `@halvaradop/eslint-config`

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2025-08-26

### Added

- Added support for `.ts` file extensions in the configuration. [#14](https://github.com/halvaradop/configs/pull/14)

- Introduced two new configurations: one for `turborepo` compatibility via the `turbo` entry point, and another for `prettier` integration. [#14](https://github.com/halvaradop/configs/pull/14)

### Changed

- Renamed the `config` configuration array rules to `baseConfig`, `tsConfig`, `reactConfig`, and `nextConfig` for improved clarity. [#14](https://github.com/halvaradop/configs/pull/14)

## [1.0.0] - 2025-08-08

### Added

- Introduced a shareable ESLint configuration supporting `JavaScript`, `TypeScript`, `React`, and `Next.js`. This configuration enforces high code quality standards to ensure consistency and maintainability across projects. [#6](https://github.com/halvaradop/configs/pull/6)
