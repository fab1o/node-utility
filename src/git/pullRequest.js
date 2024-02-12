const execSync = require('../shell/execSync');

const string = require('../string');

/**
 * @access public
 * @since 1.0.0
 * @param {String} template - PR Template
 * @param {Object} data - Data for PR template
 * @param {Object} [options={}]
 * @param {String} [options.baseBranch] - PR base branch
 * @param {String} [options.milestone=''] - PR milestone
 * @param {String} [options.labels=''] - PR labels separated by comma
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Creates a PR
 * @throws {Error} If it does not create a PR
 */
module.exports = function pullRequest(template, data, options) {
    const { baseBranch, milestone = '', labels = '', cwd, dryRun } = options || {};

    if (!baseBranch) {
        throw new Error('pullRequest() options.baseBranch is required');
    }

    // fill in fields on template
    const prDesc = string.replace(template, data);

    const shellOptions = {
        cwd,
        dryRun
    };

    // create the pull request
    execSync(
        `hub pull-request --push --force --labels '${labels}' --message '${prDesc}' --milestone '${milestone}' --base '${baseBranch}' --browse`,
        shellOptions
    );
};
