const fs = require('fs');
const path = require('path');
const process = require('process');

/**
 * @access public
 * @since 2.2.0
 * @param {String} dir - Folder path
 * @param {Object} [options={}]
 * @param {String} [options.cwd=process.cwd()] - Current working directory
 * @param {Boolean} [options.skip=false] - Do not resolve path
 * @desc Removes a folder synchronously
 * @returns {Boolean}
 * @throws {Error}
 */
module.exports = function deleteFolderSync(dir, options) {
    const { cwd = process.cwd(), skip = false } = options || {};

    const dirPath = skip ? path.resolve(dir) : path.resolve(path.join(cwd, dir));

    if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach((file) => {
            const curPath = path.join(dirPath, file);

            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderSync(curPath, { ...options, skip: true });
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dirPath);
    }

    return true;
};
