const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.7.0
 * @param {String} source - Source path to copy from
 * @param {String} target - Target path to copy to
 * @param {Object} [options={}]
 * @param {String} [options.cwd='.'] - Current working directory
 * @param {Boolean} [options.overwrite=false] - Overwrite files if possible
 * @desc Copies folders and files from a source path to a target path asynchronously.
 * @returns {Promise<Boolean>} Returns true if source was copied to target or false otherwise
 * @throws {Error}
 */
module.exports = function copy(source, target, options) {
    const { cwd = '.', overwrite = false } = options || {};

    source = path.resolve(path.join(cwd, source));
    target = path.resolve(path.join(cwd, target));

    // if source does not exist, nothing to copy
    if (fs.existsSync(source) === false) {
        throw new Error(`Source "${source}" does not exist`);
    }

    // if target exists, do not copy unless overwrite is true
    if (fs.existsSync(target)) {
        if (overwrite === false) {
            return false;
        }
    } else {
        fs.mkdirSync(target);
    }

    // if they are the same, do not copy unless overwrite is true
    if (source === target && overwrite === false) {
        return false;
    }

    return new Promise((resolve, reject) => {
        fs.readdir(source, (readErr, files) => {
            if (readErr) {
                reject(readErr);
            } else {
                Promise.all(
                    files.map((file) => {
                        return new Promise((innerResolve, innerReject) => {
                            const paths = [source, target];
                            const [srcPath, destPath] = paths.map((p) => path.join(p, file));

                            fs.lstat(srcPath, (statErr, stat) => {
                                if (statErr) {
                                    innerReject(statErr);
                                } else {
                                    switch (true) {
                                        case stat.isFile():
                                            fs.copyFile(
                                                srcPath,
                                                destPath,
                                                fs.constants.COPYFILE_FICLONE,
                                                (copyErr) => {
                                                    if (copyErr) {
                                                        innerReject(copyErr);
                                                    } else {
                                                        innerResolve();
                                                    }
                                                }
                                            );
                                            break;
                                        case stat.isDirectory():
                                            copy(srcPath, destPath, options)
                                                .then(() => innerResolve())
                                                .catch((err) => innerReject(err));
                                            break;
                                        case stat.isSymbolicLink():
                                            fs.readlink(srcPath, (readLinkErr, linkString) => {
                                                if (readLinkErr) {
                                                    innerReject(readLinkErr);
                                                } else {
                                                    fs.symlink(
                                                        linkString,
                                                        destPath,
                                                        (symlinkErr) => {
                                                            if (symlinkErr) {
                                                                innerReject(symlinkErr);
                                                            } else {
                                                                innerResolve();
                                                            }
                                                        }
                                                    );
                                                }
                                            });
                                            break;
                                        default:
                                            innerResolve();
                                            break;
                                    }
                                }
                            });
                        });
                    })
                )
                    .then(() => resolve(true))
                    .catch((err) => reject(err));
            }
        });
    });
};
