const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} target - File or directory to look for
 * @param {String} [cwd='.'] - Current working directory
 * @desc Checks if target path exists
 * @returns {Boolean}
 * @throws {Error}
 */
module.exports = function pathExists(target, cwd = '.') {
    const targetPath = path.resolve(path.join(cwd, target));

    return fs.existsSync(targetPath);
};
