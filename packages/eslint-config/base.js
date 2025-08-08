import js from "@eslint/js"
import globals from "globals"
import turboPlugin from "eslint-plugin-turbo"
import onlyWarn from "eslint-plugin-only-warn"
import eslintConfigPrettier from "eslint-config-prettier"

/**
 * A shared ESLint configuration for JavaScript projects.
 * This is the base configuration that can be extended by other configs.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.es2021,
            },
        },
        ...js.configs.recommended,
        rules: {
            ...js.configs.recommended.rules,
            "no-console": "warn",
            "no-debugger": "warn",
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "no-var": "error",
            "prefer-const": "error",
            "prefer-arrow-callback": "error",
            "arrow-spacing": "error",
            "no-duplicate-imports": "error",
            "consistent-return": "error",
            curly: ["error", "all"],
            eqeqeq: ["error", "always"],
            "no-else-return": "error",
            "no-lonely-if": "error",
            "no-unneeded-ternary": "error",
            "object-shorthand": "error",
            "prefer-template": "error",
            "no-await-in-loop": "warn",
            "no-promise-executor-return": "error",
            "require-atomic-updates": "error",
        },
    },

    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.ts", "**/*.tsx"],
        plugins: {
            turbo: turboPlugin,
        },
        rules: {
            "turbo/no-undeclared-env-vars": "warn",
        },
    },
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.ts", "**/*.tsx"],
        plugins: {
            onlyWarn,
        },
    },
    eslintConfigPrettier,
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/coverage/**",
            "**/.next/**",
            "**/.nuxt/**",
            "**/.output/**",
            "**/.vercel/**",
            "**/.netlify/**",
            "**/public/**",
            "**/*.min.js",
            "**/vendor/**",
        ],
    },
]

export default config
