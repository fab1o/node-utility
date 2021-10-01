const process = require('process');

/**
 * @access public
 * @since 1.0.0
 * @desc Gets current working directory name
 * @returns {String}
 */
module.exports = function cwd() {
    return process.cwd();
};
