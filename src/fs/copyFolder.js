const fs = require('fs');
const path = require('path');

/**
 * @access public
 * @since 1.0.0
 * @param {String} source
 * @param {String} target
 * @desc Copies a source path to a target path
 * @returns {Boolean} Returns true if source was copied to target or false otherwise
 * @throws {Error}
 */
module.exports = function copyFolder(source, target) {
    source = path.resolve(source);
    target = path.resolve(target);

    if (fs.existsSync(source) === false) {
        throw new Error('Source does not exist');
    }

    // if they are the same, it already exists
    if (source === target) {
        return false;
    }

    if (fs.existsSync(target) === false) {
        fs.mkdirSync(target);
    }

    fs.readdirSync(source).forEach((dir) => {
        const paths = [source, target];
        const [srcPath, destPath] = paths.map((p) => path.join(p, dir));

        const stat = fs.lstatSync(srcPath);

        switch (true) {
            case stat.isFile():
                fs.copyFileSync(srcPath, destPath);
                break;
            case stat.isDirectory():
                copyFolder(srcPath, destPath);
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
