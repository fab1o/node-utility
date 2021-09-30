const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Pulls latest
 * @throws {Error}
 */
module.exports = function pull(dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    git.pull('--quiet');
};
