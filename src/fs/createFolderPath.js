const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.9.1
 * @param {String} dir - Nested folder path
 * @desc Creates nested folder apth if it doesn't exist
 * @throws {Error}
 */
module.exports = function createFolderPath(dir) {
    const dirPath = path.resolve(dir);

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};
