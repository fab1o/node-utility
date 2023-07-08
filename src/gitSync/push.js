const execSync = require('../shell/execSync');

/**
 * @param {String} branchName
 * @param {Boolean} [force=false]
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Push commits to given remote branch
 */
module.exports = function push(branchName, force = false, options) {
    const forceFlag = force ? '--force' : '';

    execSync(`git push --no-verify ${forceFlag} --set-upstream origin ${branchName}`, options);
};
