import turboPlugin from "eslint-plugin-turbo"

/**
 * A shared Prettier configuration for JavaScript projects.
 * This is the base configuration that can be extended by other configs.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const turborepoConfig = [
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.ts", "**/*.tsx"],
        plugins: {
            turbo: turboPlugin,
        },
        rules: {
            "turbo/no-undeclared-env-vars": "warn",
        },
    },
]

export default turborepoConfig
