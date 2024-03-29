const fs = require('fs');
const path = require('path');
const process = require('process');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source - Directory to look for folders
 * @param {RegExp} [nameRegExp] - Regular Expression object to match folder names
 * @param {Object} [options={}]
 * @param {String} [options.cwd=process.cwd()] - Current working directory
 * @param {Boolean} [options.skip=false] - Do not resolve path
 * @desc Gets folders in a folder
 * @returns {Array<fs.Dirent>|null} List of fs.Dirent (folders)
 */
module.exports = function getFolders(source, nameRegExp, options) {
    try {
        const { cwd = process.cwd(), skip = false } = options || {};

        source = skip ? path.resolve(source) : path.resolve(path.join(cwd, source));

        const folders = fs
            .readdirSync(source, { withFileTypes: true })
            .filter((item) => item.isDirectory());

        if (nameRegExp) {
            return folders.filter((dir) => nameRegExp.test(dir.name));
        }

        return folders;
    } catch (ex) {}

    return null;
};
