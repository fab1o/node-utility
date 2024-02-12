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
 * @property {Function} cr - Console log a carriage return (blank line)
 */

const debug = require('./debug');
const info = require('./info');
const error = require('./error');
const line = require('./line');
const log = require('./log');
const warn = require('./warn');
const cr = require('./cr');

module.exports = {
    debug,
    info,
    error,
    line,
    log,
    warn,
    cr
};
