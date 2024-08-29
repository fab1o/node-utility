const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.0.0
 * @param {Object} [options]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Stashes all changes of current branch
 * @returns {Boolean}
 */
module.exports = function stash(options) {
    try {
        execSync('git stash push --include-untracked', options);

        return true;
    } catch {}

    return false;
};
