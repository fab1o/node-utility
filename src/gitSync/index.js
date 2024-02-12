/**
 * gitSync - Git handling synchronously
 */

/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} gitSync - gitSync
 * @property {Function} commit - Git commits to current branch.
 * @property {Function} clean - Cleans/Discards all changes to current branch.
 * @property {Function} clone - Clones a repo.
 * @property {Function} checkout - Checksout a branch and pulls latest.
 * @property {Function} branch - Creates a branch.
 * @property {Function} getBranchName - Gets the name of the current branch.
 * @property {Function} getIssue - Gets issue from repo.
 * @property {Function} getIssues - Gets issues from repo.
 * @property {Function} getLastCommitMsg - Gets the last commit message.
 * @property {Function} getRepoName - Gets the repository name.
 * @property {Function} pullRequest - Creates a PR.
 * @property {Function} pull - Pulls latest.
 * @property {Function} push - Push commits to given remote branch.
 * @property {Function} reset - Discards all changes to current branch.
 * @property {Function} stash - Stashes all changes of current branch.
 * @property {Function} isStatusClean - Checks if status is clean.
 * @property {Function} tag - Creates a pointer (tag) to current commmit.
 */
const commit = require('./commit');
const clean = require('./clean');
const clone = require('./clone');
const checkout = require('./checkout');
const branch = require('./branch');
const getBranchName = require('./getBranchName');
const getIssue = require('./getIssue');
const getIssues = require('./getIssues');
const getLastCommitMsg = require('./getLastCommitMsg');
const getRepoName = require('./getRepoName');
const pullRequest = require('./pullRequest');
const pull = require('./pull');
const push = require('./push');
const reset = require('./reset');
const stash = require('./stash');
const isStatusClean = require('./isStatusClean');
const tag = require('./tag');

module.exports = {
    commit,
    clean,
    clone,
    checkout,
    branch,
    getBranchName,
    getIssue,
    getIssues,
    getLastCommitMsg,
    getRepoName,
    pullRequest,
    pull,
    push,
    reset,
    stash,
    isStatusClean,
    tag
};
