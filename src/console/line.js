const chalk = require('chalk');

const colorFunc = require('./util/colorFunc');

function repeat(str, count) {
    let result = '';

    if (count < 0 || count === Infinity) {
        throw Error('Wrong number of repetitions');
    }

    for (; count > 0; (count >>>= 1) && (str += str)) {
        if (count & 1) {
            result += str;
        }
    }

    return result;
}

/**
 * @access public
 * @since 1.0.0
 * @param {String} color - Color
 * @param {Number} [count=60] - An integer between 0 and +Infinity, indicating the number of times to repeat `dividerChar`
 * @desc Console log a message represented by lines "-----------"
 */
function line(color, count = 60) {
    console.log(chalk[color](repeat('-', count)));
}

module.exports = colorFunc(line);
