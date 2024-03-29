const fs = require('fs');
const path = require('path');
const process = require('process');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source - Source path to copy from
 * @param {String} target - Target path to copy to
 * @param {Object} [options={}]
 * @param {String} [options.cwd= process.cwd()] - Current working directory
 * @param {Boolean} [options.skip=false] - Do not resolve path
 * @param {Boolean} [options.overwrite=false] - Overwrite files if possible
 * @desc Copies folders and files from a source path to a target path
 * @returns {{source:String, target:String, copied:Boolean}}
 * @throws {Error}
 */
module.exports = function copySync(source, target, options) {
    const { cwd = process.cwd(), overwrite = false, skip = false } = options || {};

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

    const stat = fs.lstatSync(source);

    switch (true) {
        case stat.isFile():
            fs.copyFileSync(source, target, fs.constants.COPYFILE_FICLONE);
            break;
        case stat.isSymbolicLink():
            fs.symlinkSync(fs.readlinkSync(source), target);
            break;
        case stat.isDirectory():
            return copyDirSync(source, target);
        default:
            break;
    }

    return { source, target, copied: true };
};

function copyDirSync(source, target) {
    fs.readdirSync(source).forEach((dir) => {
        const paths = [source, target];
        const [srcPath, destPath] = paths.map((p) => path.join(p, dir));

        const stat = fs.lstatSync(srcPath);

        switch (true) {
            case stat.isFile():
                fs.copyFileSync(srcPath, destPath, fs.constants.COPYFILE_FICLONE);
                break;
            case stat.isSymbolicLink():
                fs.symlinkSync(fs.readlinkSync(srcPath), destPath);
                break;
            case stat.isDirectory():
                return copyDirSync(srcPath, destPath);
            default:
                break;
        }

        return true;
    });
}
