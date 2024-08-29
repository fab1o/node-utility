const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.0.0
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets the repository name
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getRepoName(options) {
    try {
        const { cwd } = options || {};

        const name = execSync('basename $(git remote get-url origin)', {
            cwd,
            dryRun: false
        });

        // remove new lines
        return name.replace(/[\r\n]+/g, '');
    } catch (ex) {}

    return null;
};
