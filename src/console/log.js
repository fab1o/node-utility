const chalk = require('chalk');

const object = require('../object');

const colorFunc = require('./util/colorFunc');

/**
 * @access public
 * @since 1.0.0
 * @param {String} color
 * @param {Array} args
 * @desc Console.log
 */
function log(color, ...args) {
    if (args.length === 1) {
        console.log(chalk[color](args[0]));
    } else if (args.length > 1) {
        const arg0 = args.shift();

        console.log(chalk[color](arg0), ...args);
    } else {
        console.log(...args.map((arg) => chalk[color](object.toString(arg))));
    }
}

module.exports = colorFunc(log);
