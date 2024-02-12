const execSync = require('../shell/execSync');
const getBranchName = require('./getBranchName');

/**
 * @param {Boolean} [force=false]
 * @param {String} [branchName=git.getBranchName()]
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Push commits to given remote branch
 * @throws {Error} If it does not push the commits
 */
module.exports = function push(force = false, branchName = getBranchName(), options) {
    const forceFlag = force ? '--force' : '';

    execSync(
        `git push --tags --no-verify ${forceFlag} --set-upstream origin ${branchName}`,
        options
    );
};
