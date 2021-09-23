const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun=true]
 * @desc Stashes all changes of current branch
 * @throws {Error}
 */
module.exports = function stash(dryRun = true) {
    const git = new GitSync({ dryRun });

    git.stash('push --include-untracked');
};
