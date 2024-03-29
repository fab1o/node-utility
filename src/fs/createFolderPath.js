const fs = require('fs');
const path = require('path');
const process = require('process');

/**
 * @access public
 * @since 1.9.1
 * @param {String} dir - Nested folder path
 * @param {Object} [options={}]
 * @param {String} [options.cwd=process.cwd()] - Current working directory
 * @param {Boolean} [options.skip=false] - Do not resolve path
 * @desc Creates nested folder apth if it doesn't exist
 * @returns {String} - Folder path
 * @throws {Error}
 */
module.exports = function createFolderPath(dir, options) {
    const { cwd = process.cwd(), skip = false } = options || {};

    const dirPath = skip ? path.resolve(dir) : path.resolve(path.join(cwd, dir));

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    return dirPath;
};
