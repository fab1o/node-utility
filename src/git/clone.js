const execSync = require('../shell/execSync');

/**
 * @param {String} uri
 * @param {Object} [options]
 * @param {Object} [options.folderName] - Folder name
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Clones a repo
 * @returns {Boolean}
 */
module.exports = function clone(uri, options) {
    try {
        const { folderName = '' } = options || {};

        execSync(`git clone --quiet "${uri}" ${folderName}`, options);

        return true;
    } catch {}

    return false;
};
