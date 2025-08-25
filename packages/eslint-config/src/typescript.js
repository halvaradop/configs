import tseslint from "typescript-eslint"
import globals from "globals"
import onlyWarn from "eslint-plugin-only-warn"
import { baseConfig } from "./base.js"

/**
 * A shared ESLint configuration for TypeScript projects.
 * Can be used independently or combined with other configs.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const tsConfig = [
    ...baseConfig,
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.es2021,
            },
            parser: tseslint.parser,
            parserOptions: {
                project: ["./tsconfig.app.json"],
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
                tsconfigRootDir: process.cwd(),
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            onlyWarn,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    disallowTypeAnnotations: false,
                },
            ],
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/method-signature-style": ["error", "property"],
            "@typescript-eslint/no-duplicate-enum-values": "error",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/prefer-for-of": "error",
            "@typescript-eslint/prefer-function-type": "error",
            "@typescript-eslint/prefer-nullish-coalescing": "error",
            "@typescript-eslint/prefer-optional-chain": "error",
            "@typescript-eslint/prefer-readonly": "error",
            "@typescript-eslint/prefer-string-starts-ends-with": "error",
            "@typescript-eslint/promise-function-async": "error",
            "@typescript-eslint/require-array-sort-compare": "error",
            "@typescript-eslint/return-await": ["error", "always"],
        },
    },
    {
        files: ["**/*.d.ts"],
        rules: {
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-empty-interface": "off",
        },
    },
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

export default tsConfig
