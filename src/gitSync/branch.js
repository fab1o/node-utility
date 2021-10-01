const { GitSync } = require('@fab1o/git');

/**
 * @param {String} branchName
 * @param {Boolean} [force=false]
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Creates a branch
 * @throws {Error} If it does not create a branch
 */
module.exports = function branch(branchName, force = false, dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    // if branch is already created it will throw an error
    try {
        // create a new branch
        git.branch(branchName);
        //
    } catch (ex) {
        if (force) {
            // delete and re-create a new branch
            git.branch(`-D ${branchName}`).branch(branchName);
        } else {
            throw ex;
        }
    }
};
