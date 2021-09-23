const process = require('process');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source - Directory to copy
 * @desc Opens a folder. Folder must be side by side
 * @throws {Error}
 */
module.exports = function openFolder(source) {
    process.chdir(path.resolve(source));
};
