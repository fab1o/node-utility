const chalk = require('chalk');

/**
 * @access public
 * @since 1.0.0
 * @param {String} [color]
 * @param {Array} args
 * @desc Console log a message
 */
function coloredLog(color, ...args) {
    if (color) {
        if (args.length > 0) {
            const arg0 = args.shift();

            console.log(chalk[color](arg0), ...args);
        }
    } else if (args.length > 0) {
        const arg0 = args.shift();

        console.log(arg0, ...args);
    }
}

const log = coloredLog.bind(null, null);

log.red = coloredLog.bind(null, 'red');
log.green = coloredLog.bind(null, 'green');
log.yellow = coloredLog.bind(null, 'yellow');
log.blue = coloredLog.bind(null, 'blue');
log.magenta = coloredLog.bind(null, 'magenta');
log.cyan = coloredLog.bind(null, 'cyan');

module.exports = log;
