const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source - Source path to copy from
 * @param {String} target - Target path to copy to
 * @param {Boolean} [overwrite=false] - Overwrite files if possible
 * @desc Copies folders and files from a source path to a target path
 * @returns {Boolean} Returns true if source was copied to target or false otherwise
 */
module.exports = function copy(source, target, overwrite = false) {
    source = path.resolve(source);
    target = path.resolve(target);

    // if source does not exist, nothing to copy
    if (fs.existsSync(source) === false) {
        throw new Error('Source does not exist');
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

    fs.readdirSync(source).forEach((dir) => {
        const paths = [source, target];
        const [srcPath, destPath] = paths.map((p) => path.join(p, dir));

        const stat = fs.lstatSync(srcPath);

        switch (true) {
            case stat.isFile():
                fs.copyFileSync(srcPath, destPath, fs.constants.COPYFILE_FICLONE);
                break;
            case stat.isDirectory():
                copy(srcPath, destPath);
                break;
            case stat.isSymbolicLink():
                fs.symlinkSync(fs.readlinkSync(srcPath), destPath);
                break;
            default:
                break;
        }
    });

    return true;
};
