const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Pulls and merge latest
 */
module.exports = function pullMerge(dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    git.pull('--quiet --merge');
};
