const execSync = require('../shell/execSync');
const getLastCommitHash = require('./getLastCommitHash');

/**
 * @access public
 * @since 1.8.4
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets the last tag
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getLastTag(options = {}) {
    try {
        // force to not run dry
        options.dryRun = false;

        const hash = getLastCommitHash(options);

        if (!hash) {
            return null;
        }

        const tags = execSync(`git tag --contains ${hash}`, options);

        if (!tags || !tags.length) {
            return null;
        }

        return tags[0];
    } catch (ex) {}

    return null;
};
