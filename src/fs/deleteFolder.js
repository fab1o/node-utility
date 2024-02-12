const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} dir - Folder path
 * @desc Removes a folder asynchronously
 * @returns {Promise<Boolean>}
 * @throws {Error}
 */
module.exports = function deleteFolder(dir) {
    function deleteFile(target, file) {
        return new Promise((resolve, reject) => {
            const filePath = path.join(target, file);

            fs.lstat(filePath, (err, stats) => {
                if (err) {
                    reject(err);
                } else if (stats.isDirectory()) {
                    resolve(deleteFolder(filePath));
                } else {
                    fs.unlink(filePath, (unLinkErr) => {
                        if (unLinkErr) {
                            reject(unLinkErr);
                        } else {
                            resolve(true);
                        }
                    });
                }
            });
        });
    }

    return new Promise((resolve, reject) => {
        if (!fs.existsSync(dir)) {
            resolve(true);
        }

        fs.access(dir, (err) => {
            if (err) {
                reject(err);
            } else {
                fs.readdir(dir, (readErr, files) => {
                    if (readErr) {
                        reject(readErr);
                    } else {
                        Promise.all(
                            files.map((file) => {
                                return deleteFile(dir, file);
                            })
                        )
                            .then(() =>
                                fs.rmdir(dir, (rmDirErr) => {
                                    if (rmDirErr) {
                                        reject(rmDirErr);
                                    } else {
                                        resolve(true);
                                    }
                                })
                            )
                            .catch(reject);
                    }
                });
            }
        });
    });
};
