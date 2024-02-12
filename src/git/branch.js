const execSync = require('../shell/execSync');

/**
 * @param {String} branchName
 * @param {Boolean} [force=false]
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Creates a branch
 * @throws {Error} If it does not create a branch
 */
module.exports = function branch(branchName, force = false, options) {
    // if branch is already created it will throw an error
    try {
        // create a new branch
        execSync(`git branch ${branchName}`, options);
        //
    } catch (ex) {
        if (force) {
            // delete and re-create a new branch
            execSync(`git branch -D ${branchName}`, options);
            execSync(`git branch ${branchName}`, options);
        } else {
            throw ex;
        }
    }
};
