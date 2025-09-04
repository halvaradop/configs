import fs from "fs/promises"
import { confirm } from "@inquirer/prompts"
import * as colors from "yoctocolors"
import { updatePackageJson, exists } from "../utils/index.js"
import { info, warn, error } from "../utils/logger.js"
import { generateTsupConfigTemplate } from "../templates/tsup.js"

interface InstallOptions {
    force?: boolean
}

export const tsupCommand = async (options: InstallOptions) => {
    try {
        await installTsup(options)
    } catch (err) {
        error(colors.red(`Tsup setup failed: ${err instanceof Error ? err.message : String(err)}`))
        info(colors.yellow("Need help? Check the documentation or run with --force for more options."))
        process.exit(1)
    }
}

export const installTsup = async ({ force }: InstallOptions) => {
    const matchConfigFiles = exists("tsup.config.{js,cjs,ts,json}")

    if (matchConfigFiles.length > 0 && force === false) {
        warn(colors.yellow("Detected existing Tsup configuration files:"))
        matchConfigFiles.forEach((filePath) => {
            warn(colors.gray(`  - ${filePath}`))
        })

        const overwrite = await confirm({
            message: "Existing Tsup config files detected. Overwrite with recommended settings?",
            default: false,
        })

        if (!overwrite) {
            info(colors.yellow("Tsup setup cancelled. No changes were made."))
            return
        }
    }

    const configPath = "tsup.config.js"
    const configContent = generateTsupConfigTemplate()

    try {
        await fs.writeFile(configPath, configContent, "utf-8")
        info(colors.green(`  - Tsup config created: ${configPath}`))

        await updatePackageJson("Tsup", "devDependencies", {
            tsup: "^8.3.6",
            "@halvaradop/tsup-config": "latest",
        })
        await updatePackageJson("Tsup", "scripts", {
            dev: "tsup --watch",
            build: "tsup",
        })
    } catch (err) {
        error(`Failed to create Tsup config: ${err instanceof Error ? err.message : String(err)}`)
        throw err
    }
}
