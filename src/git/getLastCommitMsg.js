const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.7.1
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets the last commit message
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getLastCommitMsg(options = {}) {
    try {
        const { cwd } = options || {};

        // git log -1 --pretty=%B
        const message = execSync('git show-branch --no-name HEAD', {
            cwd,
            dryRun: false
        });

        return message;
    } catch (ex) {}

    return null;
};
