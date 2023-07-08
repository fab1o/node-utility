const execSync = require('../shell/execSync');

const string = require('../string');

/**
 * @param {String} template - PR Template
 * @param {Object} data - Data for PR template
 * @param {Object} [options]
 * @param {String} [options.baseBranch='main'] - PR base branch
 * @param {String} [options.milestone=''] - PR milestone
 * @param {String} [options.labels=''] - PR labels separated by comma
 * @param {String} [options.shellOptions] - Shell command options
 * @param {String} [options.shellOptions.cwd]
 * @param {Boolean} [options.shellOptions.dryRun]
 * @desc Creates a PR
 */
module.exports = function pullRequest(template, data, options) {
    const { baseBranch = 'main', milestone = '', labels = '', shellOptions } = options || {};

    // fill in fields on template
    const prDesc = string.replace(template, data);

    // create the pull request
    execSync(
        `hub pull-request --push --force --labels '${labels}' --message '${prDesc}' --milestone '${milestone}' --base '${baseBranch}' --browse`,
        shellOptions
    );
};
