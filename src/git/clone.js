const execSync = require('../shell/execSync');

/**
 * @param {String} uri
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Clones a repo
 * @returns {Boolean}
 */
module.exports = function commit(uri, options) {
    try {
        execSync(`git clone --quiet "${uri}"`, options);

        return true;
    } catch {}

    return false;
};
