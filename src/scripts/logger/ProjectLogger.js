const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'project-service' },
    transports: [
      new winston.transports.File({ filename: 'src/logs/projects/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'src/logs/projects/info.log', level: 'info' }),
      new winston.transports.File({ filename: 'src/logs/projects/combined.log' }),
      // new winston.transports.Console(),
    ],
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

  module.exports = logger;