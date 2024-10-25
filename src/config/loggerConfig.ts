import { createLogger, format, transports } from 'winston';

/**
 * Configuración del logger utilizando la librería Winston.
 * Se define el nivel de log, el formato y los transportes.
 */
const logger = createLogger({
  level: 'info', // Nivel de log (info, error, etc.)
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss', // Formato de la marca de tiempo
    }),
    format.errors({ stack: true }), // Incluir stack trace en los errores
    format.splat(), // Permitir el uso de strings de formato
    format.json(), // Formato de salida en JSON
  ),
  defaultMeta: { service: 'user-service' }, // Metadatos por defecto
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }), // Transporte para errores
    new transports.File({ filename: 'combined.log' }), // Transporte para todos los logs
  ],
});

// Si no estamos en producción, añadir transporte de consola con formato colorido y simple
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}

export default logger;
