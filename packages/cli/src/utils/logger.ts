export type LoggerInstance = {
    info: (message: string) => void
    warn: (message: string) => void
    error: (message: string) => void
}

export const logger: LoggerInstance = {
    info: console.log,
    warn: console.warn,
    error: console.error,
}

export const { info, warn, error } = logger
