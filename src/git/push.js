const execSync = require('../shell/execSync');

const getBranchName = require('./getBranchName');

/**
 * @access public
 * @since 1.0.0
 * @param {String} [branchName=git.getBranchName()]
 * @param {Object} [options={}]
 * @param {Boolean} [options.tags=false] - Push tags
 * @param {Boolean} [options.force=false]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Push commits to given remote branch
 */
module.exports = function push(branchName = getBranchName(), options) {
    const { force = false, tags = false } = options || {};

    const forceFlag = force ? '--force' : '';

    let upstream = '';

    if (branchName) {
        upstream = `--set-upstream origin ${branchName}`;
    }

    const tagsFlag = tags ? '--tags' : '';

    execSync(`git push --no-verify ${tagsFlag} ${forceFlag} ${upstream}`, options);
};
