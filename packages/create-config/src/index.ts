#!/usr/bin/env node

import { Command } from "commander"
import { eslintCommand, prettierCommand, tsupCommand, tsCommand } from "./commands/index.js"
import * as colors from "yoctocolors"

const program = new Command()

program
    .name("@halvaradop/create-config")
    .description("CLI to streamline and manage @halvaradop configuration packages efficiently.")
    .version("0.1.0")

program
    .command("eslint")
    .description("Set up ESLint configuration")
    .option("-f, --force", "Force overwrite existing ESLint config")
    .action(eslintCommand)

program
    .command("prettier")
    .description("Set up Prettier configuration")
    .option("-f, --force", "Force overwrite existing Prettier config")
    .action(prettierCommand)

program
    .command("tsup")
    .description("Set up Tsup configuration")
    .option("-f, --force", "Force overwrite existing Tsup config")
    .action(tsupCommand)

program
    .command("ts")
    .description("Set up TypeScript configuration")
    .option("-f, --force", "Force overwrite existing TypeScript config")
    .action(tsCommand)

program.parseAsync(process.argv).catch(() => {
    console.error(colors.red(`[ERROR]: the program was closed`))
    process.exit(1)
})
