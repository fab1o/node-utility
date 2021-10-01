const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Stashes all changes of current branch
 */
module.exports = function stash(dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    git.stash('push --include-untracked');
};
