import { config } from "@halvaradop/eslint-config/base"
import { config as tsConfig } from "@halvaradop/eslint-config/typescript"

export default [...config, ...tsConfig]
