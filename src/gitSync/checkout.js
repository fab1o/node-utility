const { GitSync } = require('@fab1o/git');

const getCurrentBranch = require('./getCurrentBranch');

/**
 * @param {String} branchName
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Checksout a branch
 * @returns {Boolean}
 */
module.exports = function checkout(branchName, dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    try {
        // checkout branch
        git.checkout(branchName);
    } catch (ex) {}

    const currentBranch = getCurrentBranch(dryRun);

    return currentBranch === branchName || dryRun;
};
