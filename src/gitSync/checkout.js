const { GitSync } = require('@fab1o/git');

/**
 * @param {String} branchName
 * @param {Boolean} [dryRun=true]
 * @desc Checksout a branch
 * @returns {Boolean}
 */
module.exports = function checkoutBranch(branchName, dryRun = true) {
    const git = new GitSync({ dryRun });

    try {
        // checkout branch
        git.checkout(branchName);
    } catch (ex) {}

    const currentBranch = git.git('rev-parse --abbrev-ref HEAD').stdout.toString();

    return currentBranch.indexOf(branchName) === 0 || dryRun;
};
