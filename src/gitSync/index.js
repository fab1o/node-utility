/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} gitSync - util.gitSync
 * @property {Function} commit - Git commits to current branch
 * @property {Function} clean - Cleans/Discards all changes to current branch
 * @property {Function} checkout - Checksout a branch and pulls latest
 * @property {Function} branch - Creates a branch
 * @property {Function} getCurrentBranch - Gets the name of the current branch
 * @property {Function} pullRequest - Creates a PR
 * @property {Function} pull - Pulls latest
 * @property {Function} pullMerge - Pulls and merge latest
 * @property {Function} pullRebase - Pulls and rebase latest
 * @property {Function} push - Push commits to given remote branch
 * @property {Function} reset - Discards all changes to current branch
 * @property {Function} stash - Stashes all changes of current branch
 * @property {Function} status - Checks if status is clean
 */
const commit = require('./commit');
const clean = require('./clean');
const checkout = require('./checkout');
const branch = require('./branch');
const getCurrentBranch = require('./getCurrentBranch');
const pullRequest = require('./pullRequest');
const pull = require('./pull');
const pullMerge = require('./pullMerge');
const pullRebase = require('./pullRebase');
const push = require('./push');
const reset = require('./reset');
const stash = require('./stash');
const status = require('./status');

module.exports = {
    commit,
    clean,
    checkout,
    branch,
    getCurrentBranch,
    pullRequest,
    pull,
    pullMerge,
    pullRebase,
    push,
    reset,
    stash,
    status
};
