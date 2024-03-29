const bunyan = require('bunyan');
const { LoggingBunyan } = require('@google-cloud/logging-bunyan');
const loggingBunyan = new LoggingBunyan();

const logger = bunyan.createLogger({
  name: 'my-service',
  streams: [{ stream: process.stdout, level: 'info' }, loggingBunyan.stream('info')],
});

module.exports = logger;
