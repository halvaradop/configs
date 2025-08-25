import globals from "globals"
import pluginReact from "eslint-plugin-react"
import pluginNext from "@next/eslint-plugin-next"
import pluginReactHooks from "eslint-plugin-react-hooks"
import onlyWarn from "eslint-plugin-only-warn"
import { baseConfig } from "./base.js"

/**
 * A shared ESLint configuration for Next.js projects.
 * Can be used independently or combined with TypeScript config.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nextConfig = [
    ...baseConfig,
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: pluginReact,
            "react-hooks": pluginReactHooks,
            "@next/next": pluginNext,
            onlyWarn,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            ...pluginReact.configs["jsx-runtime"].rules,
            ...pluginReactHooks.configs.recommended.rules,
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
            "react/boolean-prop-naming": "error",
            "react/button-has-type": "error",
            "react/destructuring-assignment": ["error", "always"],
            "react/display-name": "off",
            "react/function-component-definition": [
                "error",
                {
                    namedComponents: "arrow-function",
                    unnamedComponents: "arrow-function",
                },
            ],
            "react/hook-use-state": "error",
            "react/jsx-boolean-value": ["error", "never"],
            "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
            "react/jsx-fragments": ["error", "syntax"],
            "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
            "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
            "react/jsx-pascal-case": "error",
            "react/no-array-index-key": "warn",
            "react/no-object-type-as-default-prop": "error",
            "react/no-unstable-nested-components": "error",
            "react/prefer-stateless-function": "error",
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "react/self-closing-comp": "error",
            "react-hooks/exhaustive-deps": "error",
            "react-hooks/rules-of-hooks": "error",
            "@next/next/no-html-link-for-pages": "error",
            "@next/next/no-img-element": "error",
            "@next/next/no-unwanted-polyfillio": "error",
            "@next/next/no-page-custom-font": "error",
        },
    },
    {
        files: ["**/app/**/*.{js,jsx,ts,tsx}"],
        rules: {
            "@next/next/no-duplicate-head": "off",
        },
    },
    {
        files: ["**/pages/**/*.{js,jsx,ts,tsx}"],
        rules: {
            "@next/next/no-duplicate-head": "error",
        },
    },
    {
        files: ["**/pages/api/**/*.{js,ts}", "**/app/api/**/*.{js,ts}", "**/app/**/route.{js,ts}"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            "react/display-name": "off",
            "react/prop-types": "off",
            "@next/next/no-server-import-in-page": "off",
        },
    },
    {
        files: ["next.config.{js,mjs,ts}"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            "react/display-name": "off",
            "react/prop-types": "off",
        },
    },
    {
        files: ["**/__tests__/**/*.{js,jsx,ts,tsx}", "**/*.{test,spec}.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.browser,
            },
        },
        rules: {
            "react/display-name": "off",
            "react/prop-types": "off",
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

export default nextConfig
