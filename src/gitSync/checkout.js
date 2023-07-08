const execSync = require('../shell/execSync');

const getCurrentBranch = require('./getCurrentBranch');

/**
 * @param {String} branchName
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun=false]
 * @desc Checksout a branch
 * @returns {Boolean}
 */
module.exports = function checkout(branchName, options = {}) {
    const { cwd, dryRun = false } = options;

    try {
        // checkout branch
        execSync(`git checkout ${branchName}`, options);
    } catch (ex) {}

    const currentBranch = getCurrentBranch(cwd);

    return currentBranch === branchName || dryRun;
};
