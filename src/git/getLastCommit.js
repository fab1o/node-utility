const getLastCommitHash = require('./getLastCommitHash');
const getLastCommitMsg = require('./getLastCommitMsg');

/**
 * @access public
 * @since 1.8.4
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets the last commit
 * @returns {{hash: String, message: String}|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getLastCommit(options = {}) {
    try {
        // force to not run dry
        options.dryRun = false;

        const hash = getLastCommitHash(options);
        const message = getLastCommitMsg(options);

        return {
            hash,
            message
        };
    } catch (ex) {}

    return null;
};
