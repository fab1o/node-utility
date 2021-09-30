const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source - Directory to look for files
 * @param {RegExp} [nameRegExp] - Regular Expression object to match file names
 * @desc Gets files in a folder
 * @returns {Array<fs.Dirent>} List of fs.Dirent (files)
 * @throws {Error}
 */
module.exports = function getFiles(source, nameRegExp) {
    const files = fs
        .readdirSync(path.resolve(source), { withFileTypes: true })
        .filter((item) => item.isFile());

    if (nameRegExp) {
        return files.filter((file) => nameRegExp.test(file.name));
    }

    return files;
};
