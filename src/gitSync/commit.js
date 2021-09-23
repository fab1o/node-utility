const { GitSync } = require('@fab1o/git');

/**
 * @param {String} message
 * @param {Boolean} [dryRun=true]
 * @desc Git commits to current branch
 * @returns {Boolean} Whether successful or not
 */
module.exports = function commit(message, dryRun) {
    const git = new GitSync({ dryRun });

    try {
        const { stdout } = git.add('.').commit(`--quiet -m "${message}"`).status('--short');

        return !stdout.toString();
        // if stdout is empty string, status is clean
    } catch (ex) {
        return false;
    }
};
