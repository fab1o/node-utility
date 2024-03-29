const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source - Directory to look for folders
 * @param {RegExp} [nameRegExp] - Regular Expression object to match folder names
 * @param {String} [cwd='.'] - Current working directory
 * @desc Gets folders in a folder
 * @returns {Array<fs.Dirent>|null} List of fs.Dirent (folders)
 */
module.exports = function getFolders(source, nameRegExp, cwd = '.') {
    try {
        source = path.resolve(path.join(cwd, source));

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
