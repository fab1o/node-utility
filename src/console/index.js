/**
 * util.console - Console handling
 */

const info = require('./info');
const error = require('./error');
const line = require('./line');
const log = require('./log');
const warn = require('./warn');

const newConsole = {
    // custom functions
    line
};

// bind functions from global console replacing info, warn, error and log
Object.getOwnPropertyNames(console).forEach((prop) => {
    if (typeof console[prop] === 'function') {
        switch (prop) {
            case 'info':
                newConsole.info = info;
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
