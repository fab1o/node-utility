const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 2.4.1
 * @param {String} baseBranch
 * @param {Object} [options={}]
 * @param {String} [options.strategy='ours'] Options: 'ours', 'theirs'
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Rebase current branch with base branch.
 * @returns {Boolean}
 */
module.exports = function rebase(baseBranch, options) {
    const { strategy = 'ours' } = options || {};

    if (!baseBranch) {
        throw new Error('rebase() baseBranch is required');
    }

    try {
        execSync(
            `git rebase --strategy=recursive --strategy-option=${strategy} ${baseBranch}`,
            options
        );

        return true;
    } catch {}

    return false;
};
