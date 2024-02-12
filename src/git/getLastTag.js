const execSync = require('../shell/execSync');

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
        const { cwd } = options || {};

        const tags = execSync(
            `git for-each-ref refs/tags --sort=-taggerdate --format='%(refname:short)' --count=1`,
            {
                cwd,
                dryRun: false
            }
        );

        if (!tags) {
            return null;
        }

        return tags;
    } catch (ex) {}

    return null;
};
