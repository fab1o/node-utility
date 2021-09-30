const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source - Directory to look for files and folders
 * @param {RegExp} [nameRegExp] - Regular Expression object to match file and folder names
 * @desc Gets files and folders in a folder. Symbolic links are ignored.
 * @returns {Array<fs.Dirent>} List of fs.Dirent (files and folders)
 * @throws {Error}
 */
module.exports = function getFilesAndFolders(source, nameRegExp) {
    const filesAndFolders = fs
        .readdirSync(path.resolve(source), { withFileTypes: true })
        .filter((item) => item.isDirectory() || item.isFile());

    if (nameRegExp) {
        return filesAndFolders.filter((item) => nameRegExp.test(item.name));
    }

    return filesAndFolders;
};
