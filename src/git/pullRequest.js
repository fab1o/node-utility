const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.0.0
 * @param {String} title - PR title
 * @param {String} description - PR description
 * @param {Object} options
 * @param {String} options.baseBranch - PR base branch
 * @param {Boolean} [options.noEdit=false] - Use the commit message on the branch as pull request title and description
 * @param {Boolean} [options.browse=false] - Open the new pull request in a web browser
 * @param {Boolean} [options.draft=false] - Create the pull request as a draft
 * @param {Boolean} [options.copy=false] - Put the URL of the new pull request to clipboard instead of printing it
 * @param {String} [options.milestone=''] - The milestone name to add to this pull request. Passing the milestone number is deprecated
 * @param {String} [options.labels=''] - PR labels separated by comma
 * @param {String} [options.assign] - A comma-separated list (no spaces around the comma) of GitHub handles to assign to this pull request
 * @param {String} [options.reviewer] - A comma-separated list (no spaces around the comma) of GitHub handles to request a review from
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Creates a PR
 * @throws {Error} If it does not create a PR
 */
module.exports = function pullRequest(title, description, options) {
    if (!options) {
        throw new Error('pullRequest() options is required');
    }

    const {
        baseBranch,
        noEdit = false,
        browse = false,
        draft = false,
        copy = false,
        milestone = '',
        labels = '',
        assign,
        reviewer,
        cwd,
        dryRun
    } = options;

    if (!baseBranch) {
        throw new Error('pullRequest() options.baseBranch is required');
    }

    const message = `${title}\n\n${description}`;

    const noEditFlag = noEdit ? '--no-edit' : '';
    const browseFlag = browse ? '--browse' : '';
    const draftFlag = draft ? '--draft' : '';
    const copyFlag = copy ? `--copy` : '';

    const assignFlag = assign ? `--assign ${assign}` : '';
    const reviewerFlag = reviewer ? `--reviewer ${reviewer}` : '';

    const shellOptions = {
        cwd,
        dryRun
    };

    // create the pull request
    execSync(
        `hub pull-request --push --force --labels '${labels}' --message '${message}' --milestone '${milestone}' --base '${baseBranch}' ${browseFlag} ${noEditFlag} ${draftFlag} ${assignFlag} ${reviewerFlag} ${copyFlag}`,
        shellOptions
    );
};
