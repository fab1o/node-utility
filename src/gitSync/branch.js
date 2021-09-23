const { GitSync } = require('@fab1o/git');

/**
 * @param {String} branchName
 * @param {Boolean} [force=false]
 * @param {Boolean} [dryRun=true]
 * @desc Creates a branch
 * @throws {Error}
 */
module.exports = function branch(branchName, force = false, dryRun = true) {
    const git = new GitSync({ dryRun });

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
