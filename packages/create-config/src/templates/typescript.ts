export type TsConfigType = "base" | "react" | "nextjs"

interface TsConfig {
    extend: TsConfigType | `${string}base`
    compilerOptions?: Record<string, unknown>
    include?: string[]
    exclude?: string[]
}

export const defaultConfig = ({ extend, compilerOptions, include = [], exclude = [] }: TsConfig) => {
    return {
        extends: `@halvaradop/tsconfig/${extend}.json`,
        compilerOptions,
        include: ["src/**/*", "**/*.ts", "**/*.tsx", ...include],
        exclude: ["node_modules", "dist", "build", ...exclude],
    }
}

export const baseConfig = defaultConfig({ extend: "tsconfig.base" })
export const nextConfig = defaultConfig({ extend: "nextjs", include: ["next-env.d.ts"] })
export const reactConfig = defaultConfig({ extend: "react" })

export const generateTsConfigTemplate = (config: TsConfigType): Record<string, unknown> => {
    return {
        base: baseConfig,
        nextjs: nextConfig,
        react: reactConfig,
    }[config]
}
