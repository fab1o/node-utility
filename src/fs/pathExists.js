const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} target - File or directory to look for
 * @desc Checks if target path exists
 * @returns {Boolean}
 * @throws {Error}
 */
module.exports = function pathExists(target) {
    const targetPath = path.resolve(target);

    return fs.existsSync(targetPath);
};
