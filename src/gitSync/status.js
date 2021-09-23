const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun=true]
 * @desc Checks if status is clean
 * @returns {Boolean}
 * @throws {Error}
 */
module.exports = function status(dryRun) {
    const git = new GitSync({ dryRun });

    const { stdout } = git.status('--short');

    // if stdout is empty string, status is clean
    return !stdout.toString();
};
