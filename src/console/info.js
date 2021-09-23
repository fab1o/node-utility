const chalk = require('chalk');

const object = require('../object');

/**
 * @access public
 * @since 1.0.0
 * @param {Array} args
 * @desc Console.info
 */
module.exports = function info(...args) {
    if (args.length === 1) {
        console.info(chalk.blue(args[0]));
    } else if (args.length > 1) {
        const arg0 = args.shift();

        console.info(chalk.blue(arg0), ...args);
    } else {
        console.info(...args.map((arg) => chalk.blue(object.toString(arg))));
    }
};
