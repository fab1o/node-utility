const { GitSync } = require('@fab1o/git');

/**
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Cleans/Discards all changes to current branch
 */
module.exports = function clean(dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    git.clean('--force --quiet -d'); // to delete untracked files
};
