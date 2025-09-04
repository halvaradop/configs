import { baseConfig } from "@halvaradop/eslint-config/base"
import { tsConfig } from "@halvaradop/eslint-config/typescript"
import { prettierConfig } from "@halvaradop/eslint-config/prettier"
import { turborepoConfig } from "@halvaradop/eslint-config/turbo"

export default [...baseConfig, ...tsConfig, ...prettierConfig, ...turborepoConfig]
