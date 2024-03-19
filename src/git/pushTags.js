const execSync = require('../shell/execSync');

const getBranchName = require('./getBranchName');

/**
 * @access public
 * @since 2.0.2
 * @param {String} [branchName=git.getBranchName()]
 * @param {Object} [options={}]
 * @param {Boolean} [options.force=false]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Push tags to given remote branch
 */
module.exports = function pushTags(branchName, options) {
    const { force = false } = options || {};
    const forceFlag = force ? '--force' : '';

    branchName = branchName || getBranchName(options);

    let upstream = '';

    if (branchName) {
        upstream = `--set-upstream origin ${branchName}`;
    }

    execSync(`git push --no-verify --tags ${forceFlag} ${upstream}`, options);
};
