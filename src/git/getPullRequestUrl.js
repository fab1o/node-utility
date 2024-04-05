const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 2.2.0
 * @param {Object} options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Gets the PR Url if exists, otherwise null
 * @returns {String|null}
 */
module.exports = function getPullRequestUrl(options) {
    const { cwd, dryRun } = options || {};

    const shellOptions = {
        cwd,
        dryRun
    };

    try {
        const output = execSync(`hub pr show -u`, shellOptions);

        const url = output.split('\n').pop();

        return url;
    } catch {
        return null;
    }
};
