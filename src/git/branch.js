const execSync = require('../shell/execSync');

/**
 * @param {String} branchName
 * @param {Object} [options={}]
 * @param {String} [options.baseBranch]
 * @param {Boolean} [options.force=false]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Creates a branch
 * @throws {Error} If it does not create a branch
 */
module.exports = function branch(branchName, options) {
    const { baseBranch, force = false } = options || {};

    try {
        if (!baseBranch) {
            throw new Error('branch() options.baseBranch is required');
        }

        // create a new branch
        execSync(`git branch ${branchName} ${baseBranch}`, options);
        //
    } catch (ex) {
        if (force) {
            // delete and re-create a new branch
            execSync(`git branch -D ${branchName}`, options);
            execSync(`git branch ${branchName} ${baseBranch}`, options);
        } else {
            throw ex;
        }
    }
};
