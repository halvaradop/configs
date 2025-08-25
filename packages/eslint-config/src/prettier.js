import prettierPlugin from "eslint-plugin-prettier/recommended"
import { baseConfig } from "./base.js"

/**
 * A shared Prettier configuration for JavaScript projects.
 * This config enables eslint-plugin-prettier to show errors for Prettier style violations.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const prettierConfig = [
    ...baseConfig,
    prettierPlugin,
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.mjs", "**/*.cjs"],
    },
]

export default prettierConfig
