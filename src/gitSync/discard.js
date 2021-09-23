const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun=true]
 * @desc Discards all changes to current branch
 * @throws {Error}
 */
module.exports = function discard(dryRun = true) {
    const git = new GitSync({ dryRun });

    git.reset('--quiet HEAD -- .'); // to unstage files
    git.checkout('--quiet .'); // to discard modified files
    git.clean('--force --quiet -d'); // to delete files/folders remaining
};
