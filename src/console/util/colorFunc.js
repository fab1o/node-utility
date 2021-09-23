/**
 * @access private
 * @since 1.0.0
 */
const DEFAULT_COLOR = 'white';

/**
 * @access private
 * @since 1.0.0
 * @param {Function} func
 * Create color functions and pass the color as the 1st argument to the color function
 * @returns {Function}
 */
module.exports = function colorFunc(func) {
    const coloredFunc = func.bind(null, DEFAULT_COLOR);

    const colors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];

    colors.forEach((color) => {
        coloredFunc[color] = func.bind(null, color);
    });

    return coloredFunc;
};
