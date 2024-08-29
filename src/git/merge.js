const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 2.4.1
 * @param {String} baseBranch
 * @param {Object} [options={}]
 * @param {String} [options.strategy='theirs'] Options: 'ours', 'theirs'
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Merge base branch into current branch.
 * @returns {Boolean}
 */
module.exports = function merge(baseBranch, options) {
    const { strategy = 'theirs' } = options || {};

    if (!baseBranch) {
        throw new Error('merge() baseBranch is required');
    }

    try {
        execSync(`git merge -X ${strategy} ${baseBranch}`, options);

        return true;
    } catch {}

    return false;
};
