import fs from "fs/promises"
import { confirm } from "@inquirer/prompts"
import * as colors from "yoctocolors"
import { updatePackageJson, exists } from "../utils/index.js"
import { info, warn, error } from "../utils/logger.js"
import { generatePrettierConfigTemplate } from "../templates/prettier.js"

interface InstallOptions {
    force?: boolean
}

export const prettierCommand = async (options: InstallOptions) => {
    try {
        await installPrettier(options)
    } catch (err) {
        error(colors.red(`Prettier setup failed: ${err instanceof Error ? err.message : String(err)}`))
        info(colors.yellow("Need help? Check the documentation or run with --force for more options."))
        process.exit(1)
    }
}

export const installPrettier = async ({ force }: InstallOptions) => {
    const matchConfigFiles = exists([
        "prettier.config.{js,mjs,cjs,ts,mts,cts}",
        ".prettierrc.{js,mjs,cjs,ts,mts,cts,json,json5,yml,yaml,toml}",
    ])

    if (matchConfigFiles.length > 0 && force === false) {
        warn(colors.yellow("Detected existing Prettier configuration files:"))
        matchConfigFiles.forEach((filePath) => {
            warn(colors.gray(`  - ${filePath}`))
        })

        const overwrite = await confirm({
            message: "Existing Prettier config files detected. Overwrite with recommended settings?",
            default: false,
        })

        if (!overwrite) {
            info(colors.yellow("Prettier setup cancelled. No changes were made."))
            return
        }
    }

    const configPath = "prettier.config.js"
    const configContent = generatePrettierConfigTemplate()

    try {
        await fs.writeFile(configPath, configContent, "utf-8")
        info(colors.green(`  - Prettier config created: ${configPath}`))

        await updatePackageJson("Prettier", "devDependencies", {
            prettier: "^3.0.0",
            "@halvaradop/prettier-config": "latest",
        })
        await updatePackageJson("Prettier", "scripts", {
            format: "prettier --write .",
            "format:check": "prettier --check .",
        })
    } catch (err) {
        error(`Failed to create Prettier config: ${err instanceof Error ? err.message : String(err)}`)
        throw err
    }
}
