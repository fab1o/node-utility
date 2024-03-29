const fs = require('fs');
const path = require('path');
const process = require('process');

/**
 * @access public
 * @since 1.7.0
 * @param {String} source - Source path to copy from
 * @param {String} target - Target path to copy to
 * @param {Object} [options={}]
 * @param {String} [options.cwd=process.cwd()] - Current working directory
 * @param {Boolean} [options.skip=false] - Do not resolve path
 * @param {Boolean} [options.overwrite=false] - Overwrite files if possible
 * @desc Copies folders and files from a source path to a target path asynchronously.
 * @returns {Promise<{source:String, target:String, copied:Boolean}>}
 * @throws {Error}
 */
module.exports = function copy(source, target, options) {
    const { cwd = process.cwd(), skip = false, overwrite = false } = options || {};

    source = skip ? path.resolve(source) : path.resolve(path.join(cwd, source));
    target = skip ? path.resolve(target) : path.resolve(path.join(cwd, target));

    // if source does not exist, nothing to copy
    if (fs.existsSync(source) === false) {
        throw new Error(`Source "${source}" does not exist`);
    }

    // if target exists, do not copy unless overwrite is true
    if (fs.existsSync(target)) {
        if (overwrite === false) {
            return { source, target, copied: false };
        }
    } else {
        fs.mkdirSync(target);
    }

    // if they are the same, do not copy unless overwrite is true
    if (source === target && overwrite === false) {
        return { source, target, copied: false };
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
                                            copy(srcPath, destPath, { ...options, skip: true })
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
                    .then(() => resolve({ source, target, copied: true }))
                    .catch((err) => reject(err));
            }
        });
    });
};
