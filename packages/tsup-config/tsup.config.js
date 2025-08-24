/**
 * @type {import("tsup").Options}
 */
export const tsupConfig = {
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    minify: true,
}

export default tsupConfig
