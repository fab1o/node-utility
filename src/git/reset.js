const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.0.0
 * @param {Object} [options]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Resets/Discards all changes to current branch
 * @returns {Boolean}
 */
module.exports = function reset(options) {
    try {
        // to unstage files
        execSync('git reset --quiet HEAD -- .', options);
        // to discard modified files
        execSync('git checkout --quiet .', options);
        // to delete untracked files/folders remaining
        execSync('git clean --force --quiet -d', options);

        return true;
    } catch {}

    return false;
};
