import globals from "globals"
import jsxA11y from "eslint-plugin-jsx-a11y"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import onlyWarn from "eslint-plugin-only-warn"
import { baseConfig } from "./base.js"

/**
 * A shared ESLint configuration for React projects.
 * Extends the base configuration with React and React Hooks rules.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const reactConfig = [
    ...baseConfig,
    {
        files: ["**/*.jsx", "**/*.tsx"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
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
            "jsx-a11y": jsxA11y,
            onlyWarn,
        },
        settings: {
            react: {
                version: "detect",
            },
            "jsx-a11y": {
                components: {
                    Button: "button",
                    Link: "a",
                },
            },
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            ...pluginReact.configs["jsx-runtime"].rules,
            ...pluginReactHooks.configs.recommended.rules,
            "react/boolean-prop-naming": "error",
            "react/button-has-type": "error",
            "react/default-props-match-prop-types": "error",
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
            "react/jsx-sort-props": [
                "error",
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    multiline: "last",
                    reservedFirst: true,
                },
            ],
            "react/no-array-index-key": "warn",
            "react/no-object-type-as-default-prop": "error",
            "react/no-unstable-nested-components": "error",
            "react/prefer-stateless-function": "error",
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "react/self-closing-comp": "error",
            "react-hooks/exhaustive-deps": "error",
            "react-hooks/rules-of-hooks": "error",
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/aria-props": "error",
            "jsx-a11y/aria-proptypes": "error",
            "jsx-a11y/aria-unsupported-elements": "error",
            "jsx-a11y/role-has-required-aria-props": "error",
            "jsx-a11y/role-supports-aria-props": "warn",
            "jsx-a11y/click-events-have-key-events": "warn",
            "jsx-a11y/no-static-element-interactions": "warn",
        },
    },
    {
        files: ["**/*.tsx"],
        rules: {
            "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
            "react/require-default-props": "off",
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

export default reactConfig
