const chalk = require('chalk');

const object = require('../object');

/**
 * @access public
 * @since 1.0.0
 * @param {Array} args
 * @desc Console.error
 */
module.exports = function error(...args) {
    if (args.length === 1) {
        console.error(chalk.red(args[0]));
    } else if (args.length > 1) {
        const arg0 = args.shift();

        console.error(chalk.red(arg0), ...args);
    } else {
        console.error(...args.map((arg) => chalk.red(object.toString(arg))));
    }
};
