const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Checks if status is clean
 * @returns {Boolean}
 * @throws {Error}
 */
module.exports = function status(dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    const { stdout } = git.status('--short');

    // if stdout is empty string, status is clean
    return !stdout.toString();
};
