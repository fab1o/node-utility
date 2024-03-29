const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.9.1
 * @param {String} dir - Nested folder path
 * @param {String} [cwd='.'] - Current working directory
 * @desc Creates nested folder apth if it doesn't exist
 * @throws {Error}
 */
module.exports = function createFolderPath(dir, cwd = '.') {
    const dirPath = path.resolve(path.join(cwd, dir));

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};
