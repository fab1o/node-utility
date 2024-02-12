const execSync = require('../shell/execSync');

const getBranchName = require('./getBranchName');

/**
 * @access public
 * @since 1.0.0
 * @param {String} [branchName=git.getBranchName()]
 * @param {Object} [options={}] - Shell command options
 * @param {Boolean} [options.force=false]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Push commits to given remote branch
 */
module.exports = function push(branchName = getBranchName(), options) {
    const { force } = options || {};

    const forceFlag = force ? '--force' : '';

    execSync(
        `git push --tags --no-verify ${forceFlag} --set-upstream origin ${branchName}`,
        options
    );
};
