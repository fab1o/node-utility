const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Pulls and rebase latest
 */
module.exports = function pullRebase(dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    git.pull('--quiet --rebase');
};
