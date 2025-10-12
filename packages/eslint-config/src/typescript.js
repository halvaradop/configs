import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
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
            parser: tsParser,
            parserOptions: {
                project: ["./packages/*/tsconfig.json", "**/tsconfig.json", "**/tsconfig.*.json"],
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
                tsconfigRootDir: process.cwd(),
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            onlyWarn,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...tsPlugin.configs["recommended-requiring-type-checking"].rules,
            ...tsPlugin.configs.stylistic.rules,
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
            "@typescript-eslint/no-confusing-void-expression": "error",
            "@typescript-eslint/no-duplicate-enum-values": "error",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
            "@typescript-eslint/no-unnecessary-condition": "error",
            "@typescript-eslint/no-unnecessary-type-arguments": "error",
            "@typescript-eslint/prefer-for-of": "error",
            "@typescript-eslint/prefer-function-type": "error",
            "@typescript-eslint/prefer-nullish-coalescing": "error",
            "@typescript-eslint/prefer-optional-chain": "error",
            "@typescript-eslint/prefer-readonly": "error",
            "@typescript-eslint/prefer-string-starts-ends-with": "error",
            "@typescript-eslint/promise-function-async": "error",
            "@typescript-eslint/require-array-sort-compare": "error",
            "@typescript-eslint/restrict-plus-operands": "error",
            "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true, allowBoolean: true }],
            "@typescript-eslint/return-await": ["error", "always"],
            "@typescript-eslint/strict-boolean-expressions": [
                "error",
                {
                    allowString: false,
                    allowNumber: false,
                    allowNullableObject: false,
                    allowNullableBoolean: false,
                    allowNullableString: false,
                    allowNullableNumber: false,
                    allowAny: false,
                },
            ],
            "@typescript-eslint/switch-exhaustiveness-check": "error",
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
