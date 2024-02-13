const chalk = require('chalk');

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
 * @access private
 * @since 1.0.0
 * @param {String} [color] - Color
 * @param {Number} [count=50] - An integer between 0 and +Infinity, indicating the number of times to repeat `dividerChar`
 * @desc Console log a message represented by lines "-----------"
 */
function coloredLine(color, count = 50) {
    if (color) {
        console.log(chalk[color](repeat('-', count)));
    } else {
        console.log(repeat('-', count));
    }
}

const line = coloredLine.bind(null, null);

line.red = coloredLine.bind(null, 'red');
line.green = coloredLine.bind(null, 'green');
line.yellow = coloredLine.bind(null, 'yellow');
line.blue = coloredLine.bind(null, 'blue');
line.magenta = coloredLine.bind(null, 'magenta');
line.cyan = coloredLine.bind(null, 'cyan');

module.exports = line;
