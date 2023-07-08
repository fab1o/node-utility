const chalk = require('chalk');

/**
 * @access public
 * @since 1.0.0
 * @param {Array} args
 * @desc Console log an error message
 */
module.exports = function error(...args) {
    if (args.length > 0) {
        const arg0 = args.shift();

        console.error(chalk.red(arg0), ...args);
    }
};
