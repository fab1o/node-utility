const execSync = require('../shell/execSync');

const getBranchName = require('./getBranchName');

/**
 * @access public
 * @since 1.0.0
 * @param {String} [branchName=git.getBranchName()]
 * @param {Object} [options={}]
 * @param {Boolean} [options.force=false]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Push commits to given remote branch
 */
module.exports = function push(branchName, options) {
    const { force = false } = options || {};
    const forceFlag = force ? '--force' : '';

    branchName = branchName || getBranchName(options);

    let upstream = '';

    if (branchName) {
        upstream = `--set-upstream origin ${branchName}`;
    }

    execSync(`git push --no-verify ${forceFlag} ${upstream}`, options);
};
