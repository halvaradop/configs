export type EslintConfigType = "base" | "react" | "next" | "turbo" | "prettier" | "typescript"

export const eslintImportTemplate = (configType: EslintConfigType): string => {
    return `import { ${configType}Config } from "@halvaradop/eslint-config/${configType}"`
}

export const generateEslintConfigTemplate = (configType: EslintConfigType[]): string => {
    const imports = configType.map((type) => `import { ${type}Config } from "@halvaradop/eslint-config/${type}"`).join("\n")
    const configs = configType.map((type) => `...${type}Config`).join(",")
    return `
${imports}

export default [${configs}]
    `.trim()
}
