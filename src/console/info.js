const chalk = require('chalk');

/**
 * @access public
 * @since 1.0.0
 * @param {Array} args
 * @desc Console log an information message
 */
module.exports = function info(...args) {
    if (args.length > 0) {
        const arg0 = args.shift();

        console.info(chalk.cyan(arg0), ...args);
    }
};
