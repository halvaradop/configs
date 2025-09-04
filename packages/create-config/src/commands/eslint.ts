import fs from "fs/promises"
import { confirm } from "@inquirer/prompts"
import * as colors from "yoctocolors"
import { updatePackageJson, exists } from "../utils/index.js"
import { info, warn, error } from "../utils/logger.js"
import { type EslintConfigType, generateEslintConfigTemplate } from "../templates/eslint.js"

interface InstallOptions {
    force?: boolean
}

export const eslintCommand = async (options: InstallOptions) => {
    try {
        await installEslint(options)
    } catch (err) {
        error(colors.red(`ESLint setup failed: ${err instanceof Error ? err.message : String(err)}`))
        info(colors.yellow("Need help? Check the documentation or run with --force for more options."))
        process.exit(1)
    }
}

export const confirmConfig = async (value: string) => {
    return await confirm({
        message: `Would you like to include ${value} configuration?`,
    })
}

/**
 * TODO: Clean up code
 * For an strange reason @inquirer/prompts overflows the terminal for multiples confirmations
 */
export const confirmAllConfigs = async () => {
    const configs: EslintConfigType[] = []
    const base = await confirmConfig("Base")
    const next = await confirmConfig("Next.js")
    const react = await confirmConfig("React")
    const turbo = await confirmConfig("Turbo")
    const prettier = await confirmConfig("Prettier")
    const typescript = await confirmConfig("TypeScript")
    if (base) configs.push("base")
    if (next) configs.push("next")
    if (react) configs.push("react")
    if (turbo) configs.push("turbo")
    if (prettier) configs.push("prettier")
    if (typescript) configs.push("typescript")
    return configs
}

export const installEslint = async ({ force }: InstallOptions) => {
    const matchConfigFiles = exists(["eslint.config.{js,ts}", ".eslintrc", ".eslintrc.{js,json}"])

    if (matchConfigFiles.length > 0 && !force) {
        warn(colors.yellow("Detected existing ESLint configuration files:"))

        matchConfigFiles.forEach((config) => warn(colors.gray(`  - ${config}`)))

        const overwrite = await confirm({
            message: "Existing ESLint config files detected. Overwrite with recommended settings?",
            default: false,
        })

        if (!overwrite) {
            info(colors.yellow("ESLint setup cancelled. No changes were made."))
            return
        }
    }

    const configPath = "eslint.config.js"
    const templates = await confirmAllConfigs()
    const configContent = generateEslintConfigTemplate(templates)

    try {
        await fs.writeFile(configPath, configContent, "utf-8")
        info(colors.green(`  - ESLint config created: ${configPath}`))

        await updatePackageJson("ESLint", "devDependencies", {
            eslint: "^9.34.0",
            "@halvaradop/eslint-config": "latest",
        })
        await updatePackageJson("ESLint", "scripts", {
            lint: "eslint . --cache --cache-location .cache/.eslintcache",
            "lint:fix": "eslint . --fix --cache --cache-location .cache/.eslintcache",
        })
    } catch (err) {
        error(`Failed to create ESLint configuration: ${err instanceof Error ? err.message : String(err)}`)
        throw err
    }
}
