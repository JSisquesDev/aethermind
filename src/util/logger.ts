import logger from '@/config/loggerConfig';

/**
 * Función para registrar mensajes de log.
 * @param {string} level - Nivel del log (info, error, etc.).
 * @param {string} message - Mensaje a registrar.
 */
const logMessage = (level: string, message: string) => {
  logger.log({
    level,
    message,
  });
};

export default logMessage;
