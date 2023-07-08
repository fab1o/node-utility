const execSync = require('../shell/execSync');

/**
 * @param {String} [cwd]
 * @desc Gets the name of the current branch
 * @returns {String}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getCurrentBranch(cwd) {
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd });

    // remove new lines
    return currentBranch.replace(/[\r\n]+/g, '');
};
