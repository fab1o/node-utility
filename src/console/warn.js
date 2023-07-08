const chalk = require('chalk');

/**
 * @access public
 * @since 1.0.0
 * @param {Array} args
 * @desc Console log a warning message
 */
module.exports = function warn(...args) {
    if (args.length > 0) {
        const arg0 = args.shift();

        console.warn(chalk.yellow(arg0), ...args);
    }
};
