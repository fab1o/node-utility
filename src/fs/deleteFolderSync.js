const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 2.2.0
 * @param {String} dir - Folder path
 * @desc Removes a folder synchronously
 */
module.exports = function deleteFolderSync(dir) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((file) => {
            const curPath = path.join(dir, file);

            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderSync(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dir);
    }
};
