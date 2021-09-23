const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun=true]
 * @desc Pulls and merge latest
 * @throws {Error}
 */
module.exports = function pullMerge(dryRun = true) {
    const git = new GitSync({ dryRun });

    git.pull('--quiet --merge');
};
