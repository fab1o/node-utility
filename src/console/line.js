const chalk = require('chalk');

const colorFunc = require('./util/colorFunc');

/**
 * @access public
 * @since 1.0.0
 * @param {String} color - Color
 * @param {String} [char='-'] - Character to fill the line with
 * @param {Number} [count=99] - An integer between 0 and +Infinity, indicating the number of times to repeat `dividerChar`
 * Logs a line
 */
function line(color, char = '-', count = 99) {
    console.log(chalk[color](char.repeat(count)));
}

module.exports = colorFunc(line);
