const chalk = require('chalk');

/**
 * @access public
 * @since 2.2.0
 * @param {Array} args
 * @desc Console log a debug message
 */
module.exports = function debug(...args) {
    if (args.length > 0) {
        const arg0 = args.shift();

        console.info(chalk.magenta(arg0), ...args);
    }
};
