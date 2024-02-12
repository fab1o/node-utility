const execSync = require('./execSync');

/**
 * @access public
 * @since 1.0.0
 * @param {String} command
 * @desc Checks if command exists
 * @returns {Boolean}
 */
module.exports = function commandExists(command) {
    try {
        if (command) {
            return !!execSync(`command -v ${command}`);
        }

        return false;
    } catch {
        return false;
    }
};
