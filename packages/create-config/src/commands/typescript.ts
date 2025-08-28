import fs from "fs/promises"
import { select, confirm } from "@inquirer/prompts"
import * as colors from "yoctocolors"
import { addScripts, exists } from "../utils/index.js"
import { info, warn, error } from "../utils/logger.js"
import { generateTsConfigTemplate, type TsConfigType } from "../templates/typescript.js"

interface InstallOptions {
    force?: boolean
}

const TSCONFIG_TYPES = [
    {
        name: "TypeScript Configuration",
        value: "base",
        description: "Basic TypeScript configuration",
    },
    {
        name: "React TypeScript Configuration",
        value: "react",
        description: "TypeScript configuration for React projects",
    },
    {
        name: "Next.js TypeScript Configuration",
        value: "nextjs",
        description: "TypeScript configuration for Next.js projects",
    },
]

export const tsCommand = async (options: InstallOptions) => {
    try {
        await installTypescript(options)
    } catch (err) {
        error(colors.red(`TypeScript setup failed: ${err instanceof Error ? err.message : String(err)}`))
        info(colors.yellow("Need help? Check the documentation or run with --force for more options."))
        process.exit(1)
    }
}
export const installTypescript = async ({ force }: InstallOptions) => {
    const matchConfigFiles = exists(["tsconfig.json", "tsconfig.*.json"])

    if (matchConfigFiles.length > 0 && !force) {
        warn(colors.yellow("Detected existing TypeScript configuration files:"))
        matchConfigFiles.forEach(async (filePath) => warn(colors.gray(`  - ${filePath}`)))

        const overwrite = await confirm({
            message: "Existing TypeScript config files detected. Overwrite with recommended settings?",
            default: false,
        })

        if (!overwrite) {
            info(colors.yellow("TypeScript setup cancelled. No changes were made."))
            return
        }
    }

    const configType = await select({
        message: "Select TypeScript configuration type:",
        choices: TSCONFIG_TYPES,
    })

    const configPath = "tsconfig.json"
    const tsTemplateConfig = generateTsConfigTemplate(configType as TsConfigType)
    const configContent = JSON.stringify(tsTemplateConfig, null, 2)

    try {
        await fs.writeFile(configPath, configContent, "utf-8")
        info(colors.green(`  - TypeScript config created: ${configPath}`))
        await addScripts("TypeScript", {
            dev: "tsc --watch",
            build: "tsc",
            "type-check": "tsc --noEmit",
        })
    } catch (err) {
        error(`Failed to create TypeScript config: ${err instanceof Error ? err.message : String(err)}`)
        throw err
    }
}
