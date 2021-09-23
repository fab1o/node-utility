const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun=true]
 * @desc Pulls latest
 * @throws {Error}
 */
module.exports = function pull(dryRun = true) {
    const git = new GitSync({ dryRun });

    git.pull('--quiet');
};
