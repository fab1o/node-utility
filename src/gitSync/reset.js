const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Resets/Discards all changes to current branch
 * @throws {Error}
 */
module.exports = function reset(dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    git.reset('--quiet HEAD -- .'); // to unstage files
    git.checkout('--quiet .'); // to discard modified files
    git.clean('--force --quiet -d'); // to delete untracked files/folders remaining
};
