const { GitSync } = require('@fab1o/git');

const string = require('../string');

/**
 * @param {String} template - PR Template
 * @param {Object} data - PR data
 * @param {String} milestone - PR milestone
 * @param {String} baseBranch - PR base branch
 * @param {Boolean} [dryRun] - Run in dry mode
 * @param {String} [cwd] - Current working directory
 * @desc Creates a PR
 */
module.exports = function pullRequest(template, data, milestone, baseBranch, dryRun, cwd) {
    const git = new GitSync({ dryRun, cwd });

    // fill in fields on template
    const prDesc = string.replace(template, data);

    // create the pull request
    git.pullRequest(
        `--push --force --browse --message '${prDesc}' --milestone "${milestone}" --labels release --base ${baseBranch}`
    );
};
