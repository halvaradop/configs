export const generatePrettierConfigTemplate = () => {
    return `
import { config } from "@halvaradop/prettier-config"

/**
 * @type {import("prettier").Config}
 */
export default config
`
}
