const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.7.0
 * @param {String} [cwd]
 * @desc Gets the name of the current branch
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getBranchName(cwd) {
    try {
        const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd });

        // remove new lines
        return currentBranch.replace(/[\r\n]+/g, '');
    } catch (ex) {}

    return null;
};
