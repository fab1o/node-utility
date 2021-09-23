const { GitSync } = require('@fab1o/git');

/**
 * @param {String} branchName
 * @param {Boolean} [dryRun=true]
 * @desc Push commits to given remote branch
 * @throws {Error}
 */
module.exports = function push(branchName, dryRun = true) {
    const git = new GitSync({ dryRun });

    // git push commits to remote branch
    git.push(`--no-verify --force --set-upstream origin ${branchName}`);
};
