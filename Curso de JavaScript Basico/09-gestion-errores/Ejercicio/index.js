const logger = require('./logger');

function errorPersonalizado () {
    if (false) {
        return `Todo perfecto`
    }
    throw new Error("Hay un error")
}

try {
    errorPersonalizado()
} catch (error) {
    logger.error(`${error}`)
}