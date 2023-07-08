const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source - Directory to look for folders
 * @param {RegExp} [nameRegExp] - Regular Expression object to match folder names
 * @desc Gets folders in a folder
 * @returns {Array<fs.Dirent>} List of fs.Dirent (folders)
 */
module.exports = function getFolders(source, nameRegExp) {
    const folders = fs
        .readdirSync(path.resolve(source), { withFileTypes: true })
        .filter((item) => item.isDirectory());

    if (nameRegExp) {
        return folders.filter((dir) => nameRegExp.test(dir.name));
    }

    return folders;
};
