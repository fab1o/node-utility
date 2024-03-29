const fs = require('fs');
const path = require('path');
const process = require('process');

/**
 * @access public
 * @since 1.0.0
 * @param {String} dir - Folder path
 * @param {Object} [options={}]
 * @param {String} [options.cwd=process.cwd()] - Current working directory
 * @param {Boolean} [options.skip=false] - Do not resolve path
 * @desc Removes a folder asynchronously
 * @returns {Promise<Boolean>}
 * @throws {Error}
 */
module.exports = function deleteFolder(dir, options) {
    const { cwd = process.cwd(), skip = false } = options || {};

    const dirPath = skip ? path.resolve(dir) : path.resolve(path.join(cwd, dir));

    function deleteFile(target, file) {
        return new Promise((resolve, reject) => {
            const filePath = path.join(target, file);

            fs.lstat(filePath, (err, stats) => {
                if (err) {
                    reject(err);
                } else if (stats.isDirectory()) {
                    resolve(deleteFolder(filePath, { ...options, skip: true }));
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
        if (!fs.existsSync(dirPath)) {
            resolve(true);
        }

        fs.access(dirPath, (err) => {
            if (err) {
                reject(err);
            } else {
                fs.readdir(dirPath, (readErr, files) => {
                    if (readErr) {
                        reject(readErr);
                    } else {
                        Promise.all(
                            files.map((file) => {
                                return deleteFile(dirPath, file);
                            })
                        )
                            .then(() =>
                                fs.rmdir(dirPath, (rmDirErr) => {
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
