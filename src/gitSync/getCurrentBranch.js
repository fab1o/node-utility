const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun] - Run in dry mode (default: false)
 * @param {String} [cwd] - Current working directory
 * @desc Gets the name of the current branch
 * @returns {String}
 */
module.exports = function getCurrentBranch(dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    const currentBranch = git.git('rev-parse --abbrev-ref HEAD').stdout.toString();

    return currentBranch.replace(/[\r\n]+/g, '');
};
