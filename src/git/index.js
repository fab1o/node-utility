/**
 * git - Git handling synchronously
 */

/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} git - git
 * @property {Function} branch - Creates a branch.
 * @property {Function} commit - Git commits to current branch.
 * @property {Function} clean - Cleans/Discards all changes to current branch.
 * @property {Function} clone - Clones a repo.
 * @property {Function} checkout - Checksout a branch and pulls latest.
 * @property {Function} deleteTag - Deletes a tag remotely and locally.
 * @property {Function} getBranchName - Gets the name of the current branch.
 * @property {Function} getDefaultBranch - Gets the name of the default branch.
 * @property {Function} getIssue - Gets issue from repo.
 * @property {Function} getIssues - Gets issues from repo.
 * @property {Function} getLastCommit - Gets the last commit.
 * @property {Function} getLastCommitHash - Gets the last commit hash.
 * @property {Function} getLastCommitMsg - Gets the last commit message.
 * @property {Function} getLastTag - Gets the last tag.
 * @property {Function} getLastTags - Gets the last tags.
 * @property {Function} getRepoName - Gets the repository name.
 * @property {Function} getPullRequestUrl - Gets an Url if there is a PR for current branch and the PS is open, otherwise null.
 * @property {Function} merge - Merge base branch into current branch.
 * @property {Function} pullRequest - Creates a PR.
 * @property {Function} pull - Pulls latest.
 * @property {Function} push - Push commits to given remote branch.
 * @property {Function} pushTags - Push tags to given remote branch.
 * @property {Function} reset - Discards all changes to current branch.
 * @property {Function} rebase - Rebase current branch with base branch.
 * @property {Function} stash - Stashes all changes of current branch.
 * @property {Function} isStatusClean - Checks if status is clean.
 * @property {Function} tag - Creates a pointer (tag) to current commmit.
 */
const branch = require('./branch');
const commit = require('./commit');
const clean = require('./clean');
const clone = require('./clone');
const checkout = require('./checkout');
const deleteTag = require('./deleteTag');
const getBranchName = require('./getBranchName');
const getDefaultBranch = require('./getDefaultBranch');
const getIssue = require('./getIssue');
const getIssues = require('./getIssues');
const getLastCommit = require('./getLastCommit');
const getLastCommitHash = require('./getLastCommitHash');
const getLastCommitMsg = require('./getLastCommitMsg');
const getLastTag = require('./getLastTag');
const getLastTags = require('./getLastTags');
const getRepoName = require('./getRepoName');
const getPullRequestUrl = require('./getPullRequestUrl');
const merge = require('./merge');
const pullRequest = require('./pullRequest');
const pull = require('./pull');
const push = require('./push');
const pushTags = require('./pushTags');
const reset = require('./reset');
const rebase = require('./rebase');
const stash = require('./stash');
const isStatusClean = require('./isStatusClean');
const tag = require('./tag');

module.exports = {
    branch,
    commit,
    clean,
    clone,
    checkout,
    deleteTag,
    getBranchName,
    getDefaultBranch,
    getIssue,
    getIssues,
    getLastCommit,
    getLastCommitMsg,
    getLastCommitHash,
    getLastTag,
    getLastTags,
    getRepoName,
    getPullRequestUrl,
    merge,
    pullRequest,
    pull,
    push,
    pushTags,
    reset,
    rebase,
    stash,
    isStatusClean,
    tag
};
