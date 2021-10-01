const { GitSync } = require('@fab1o/git');

/**
 * @param {String} branchName
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Push commits to given remote branch
 */
module.exports = function push(branchName, dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    // git push commits to remote branch
    git.push(`--no-verify --force --set-upstream origin ${branchName}`);
};
