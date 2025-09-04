import fs from "fs/promises"
import { globSync } from "glob"
import * as colors from "yoctocolors"
import { warn, info } from "./logger.js"

export const exists = (file: string | string[]) => {
    return globSync(file)
}

export const writeJsonFile = async (filePath: string, data: string): Promise<void> => {
    try {
        await fs.writeFile(filePath, data, "utf-8")
    } catch (error) {
        throw new Error(`Failed to write JSON file ${filePath}: ${error instanceof Error ? error.message : String(error)}`)
    }
}

export const readPackageJson = async (filePath: string) => {
    try {
        const packageJsonExists = exists(filePath)
        if (packageJsonExists.length === 0) {
            warn(
                colors.yellow(
                    "No package.json found in the current directory. Please run `pnpm init`, `npm init` or `yarn init` to create one."
                )
            )
            throw new Error()
        }
        const packageJsonContent = await fs.readFile(filePath, "utf-8")
        return JSON.parse(packageJsonContent)
    } catch (error) {
        throw new Error(
            `Failed to read package.json file at ${filePath}: ${error instanceof Error ? error.message : String(error)}`
        )
    }
}

export const updatePackageJson = async (pkg: string, keyJson: string, entries: Record<string, string>) => {
    try {
        const packageJson = await readPackageJson("package.json")
        packageJson[keyJson] ??= {}

        Object.entries(entries).forEach(([key, value]) => {
            if (!packageJson[keyJson][key]) {
                packageJson[keyJson][key] = value
            }
        })
        const sortedEntries = Object.entries(packageJson[keyJson]).sort(([a], [b]) => a.localeCompare(b))
        packageJson[keyJson] = Object.fromEntries(sortedEntries)

        await writeJsonFile("package.json", JSON.stringify(packageJson, null, 2))
        info(colors.green(`  - ${pkg} ${keyJson} added to package.json`))
    } catch (error) {
        console.log(error)
        warn(colors.yellow(`Could not update package.json ${keyJson} for ${pkg}. You may need to add them manually.`))
    }
}
