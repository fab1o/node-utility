const chalk = require('chalk');

const object = require('../object');

/**
 * @access public
 * @since 1.0.0
 * @param {Array} args
 * @desc Console.warn
 */
module.exports = function warn(...args) {
    if (args.length === 1) {
        console.warn(chalk.yellow(args[0]));
    } else if (args.length > 1) {
        const arg0 = args.shift();

        console.warn(chalk.yellow(arg0), ...args);
    } else {
        console.warn(...args.map((arg) => chalk.yellow(object.toString(arg))));
    }
};
