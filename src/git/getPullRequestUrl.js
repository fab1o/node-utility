const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 2.2.0
 * @param {Object} options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Gets an Url if there is a PR for current branch and the PS is open, otherwise null
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
