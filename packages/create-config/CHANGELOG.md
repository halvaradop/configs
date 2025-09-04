# CHANGELOG - `@halvaradop/create-config`

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2025-09-04

### Added

- Dependencies for packages and scripts are now managed in `package.json`. [#18](https://github.com/halvaradop/configs/pull/18)

### Changed

- Excluded unnecessary files from being published to npm, ensuring only the `dist` folders are included. [#19](https://github.com/halvaradop/configs/pull/19)

## [0.1.0] - 2025-08-31

### Added

- Introduced a CLI tool to set up `@halvaradop/configs` directly from the terminal. The tool supports configuration for `ESLint`, `Prettier`, `TypeScript`, and `Tsup`. [#16](https://github.com/halvaradop/configs/pull/16)
