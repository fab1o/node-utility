const execSync = require('../shell/execSync');

/**
 * @access public
 * @param {Object} [options]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Cleans/Discards all changes to current branch
 * @throws {Error} If it does not clean a branch
 */
module.exports = function clean(options) {
    // to delete untracked files
    execSync('git clean --force --quiet -d', options);
};
