const logger = require('./logger'); 

// If an object is exported with many members exported from the logger module.
logger.log('message');

// What if the the log function is the only thing exported, we access it using...
// logger('message');