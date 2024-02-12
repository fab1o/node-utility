const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.8.4
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets the last commit hash
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getLastCommitHash(options = {}) {
    try {
        // force to not run dry
        options.dryRun = false;

        const hash = execSync('git rev-parse HEAD', options);

        return hash;
    } catch (ex) {}

    return null;
};
