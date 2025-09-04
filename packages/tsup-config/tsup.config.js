/**
 * @type {import("tsup").Options}
 */
export const tsupConfig = {
    entry: ["src"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    minify: true,
}

export default tsupConfig
