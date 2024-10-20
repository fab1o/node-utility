const execSync = require('../shell/execSync');

const getBranchName = require('./getBranchName');

/**
 * @access public
 * @param {String} branchName
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun=false]
 * @desc Checksout a branch
 * @returns {Boolean}
 */
module.exports = function checkout(branchName, options) {
    const { dryRun = false } = options || {};

    try {
        // checkout branch
        execSync(`git checkout ${branchName}`, options);
    } catch (ex) {}

    const currentBranch = getBranchName(options);

    return currentBranch === branchName || dryRun;
};
