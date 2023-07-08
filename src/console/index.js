/**
 * console - Console handling
 */

/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} console
 * @property {Function} debug - Console log a debug message
 * @property {Function} info - Console log an information message
 * @property {Function} error - Console log an error message
 * @property {Function} line - Console log a message represented by lines "-----------"
 * @property {Function} log - Console log a message
 * @property {Function} warn - Console log a warning message
 */

const debug = require('./debug');
const info = require('./info');
const error = require('./error');
const line = require('./line');
const log = require('./log');
const warn = require('./warn');

const newConsole = {
    // custom functions
    line
};

// bind functions from global console replacing debug, info, warn, error and log
Object.getOwnPropertyNames(console).forEach((prop) => {
    if (typeof console[prop] === 'function') {
        switch (prop) {
            case 'info':
                newConsole.info = info;
                break;
            case 'debug':
                newConsole.debug = debug;
                break;
            case 'warn':
                newConsole.warn = warn;
                break;
            case 'error':
                newConsole.error = error;
                break;
            case 'log':
                newConsole.log = log;
                break;
            default:
                newConsole[prop] = console[prop].bind(console);
                break;
        }
    }
});

module.exports = newConsole;
