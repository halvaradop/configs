import type { Options } from "tsup"

export const tsupConfig: Options = {
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    minify: true,
}

export default tsupConfig
