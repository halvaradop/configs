import fs from "fs/promises"
import { globSync } from "glob"
import * as colors from "yoctocolors"
import { warn, info } from "./logger.js"

export const exists = (file: string | string[]) => {
    return globSync(file)
}

export const writeJsonFile = async (filePath: string, data: any): Promise<void> => {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8")
    } catch (error) {
        throw new Error(`Failed to write JSON file ${filePath}: ${error}`)
    }
}

export const addScripts = async (name: string, scripts: Record<string, string>) => {
    try {
        const packageJsonExists = exists("package.json")

        if (!packageJsonExists) {
            warn(colors.yellow(`No package.json found. Please add ${name} scripts to your project manually.`))
            return
        }

        const packageJsonContent = await fs.readFile("package.json", "utf-8")
        const packageJson = JSON.parse(packageJsonContent)

        if (!packageJson.scripts) {
            packageJson.scripts = {}
        }

        Object.entries(scripts).forEach(([key, value]) => {
            if (!packageJson.scripts[key]) {
                packageJson.scripts[key] = value
            }
        })

        await writeJsonFile("package.json", packageJson)
        info(colors.green(`  - ${name} scripts added to package.json`))
    } catch {
        warn(colors.yellow(`Could not update package.json scripts for ${name}. You may need to add them manually.`))
    }
}


export const packageJson = async  () => {
    const pkg = await fs.readFile("package.json", "utf-8")
    return JSON.parse(pkg)
}