const fs = require('fs');
const path = require('path');
const process = require('process');

/**
 * @access public
 * @since 1.0.0
 * @param {String} target - File or directory to look for
 * @param {String} [cwd=process.cwd()] - Current working directory
 * @param {Boolean} [skip=false] - Do not resolve path
 * @desc Checks if target path exists
 * @returns {Boolean}
 * @throws {Error}
 */
module.exports = function pathExists(target, cwd = process.cwd(), skip = false) {
    const targetPath = skip ? path.resolve(target) : path.resolve(path.join(cwd, target));

    return fs.existsSync(targetPath);
};
