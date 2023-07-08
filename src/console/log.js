const chalk = require('chalk');

const colorFunc = require('./util/colorFunc');

/**
 * @access public
 * @since 1.0.0
 * @param {String} color
 * @param {Array} args
 * @desc Console log a message
 */
function log(color, ...args) {
    if (args.length > 0) {
        const arg0 = args.shift();

        console.log(chalk[color](arg0), ...args);
    }
}

module.exports = colorFunc(log);
