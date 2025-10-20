# CHANGELOG - `@halvaradop/tsconfig`

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2025-10-19

### Changed

- Disabled `declaration` and `declarationMap` options in the base TypeScript configuration file. [#20](https://github.com/halvaradop/configs/pull/20)

## [1.1.1] - 2025-09-04

### Changed

- Excluded unnecessary files from being published to npm, ensuring only the `dist` folders are included. [#19](https://github.com/halvaradop/configs/pull/19)

## [1.1.0] - 2025-08-26

### Changed

- Updated the TypeScript configuration files by modifying the `lib` values for `nextjs` and adding the `noFallthroughCasesInSwitch` field for `react`. For more details, see [#13](https://github.com/halvaradop/configs/pull/13).

## [1.0.0] - 2025-08-08

### Addedd

- Introduced a shareable TypeScript configuration package with presets for `Basic`, `React`, and `Next.js` applications. See [#3](https://github.com/halvaradop/configs/pull/3) for details.
