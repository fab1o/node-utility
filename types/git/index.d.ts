/**
 * - git
 */
export type git = {
    /**
     * - Git commits to current branch.
     */
    commit: Function;
    /**
     * - Cleans/Discards all changes to current branch.
     */
    clean: Function;
    /**
     * - Clones a repo.
     */
    clone: Function;
    /**
     * - Checksout a branch and pulls latest.
     */
    checkout: Function;
    /**
     * - Creates a branch.
     */
    branch: Function;
    /**
     * - Gets the name of the current branch.
     */
    getBranchName: Function;
    /**
     * - Gets the name of the default branch.
     */
    getDefaultBranch: Function;
    /**
     * - Gets issue from repo.
     */
    getIssue: Function;
    /**
     * - Gets issues from repo.
     */
    getIssues: Function;
    /**
     * - Gets the last commit.
     */
    getLastCommit: Function;
    /**
     * - Gets the last commit hash.
     */
    getLastCommitHash: Function;
    /**
     * - Gets the last commit message.
     */
    getLastCommitMsg: Function;
    /**
     * - Gets the last tag.
     */
    getLastTag: Function;
    /**
     * - Gets the last tags.
     */
    getLastTags: Function;
    /**
     * - Gets the repository name.
     */
    getRepoName: Function;
    /**
     * - Creates a PR.
     */
    pullRequest: Function;
    /**
     * - Pulls latest.
     */
    pull: Function;
    /**
     * - Push commits to given remote branch.
     */
    push: Function;
    /**
     * - Discards all changes to current branch.
     */
    reset: Function;
    /**
     * - Stashes all changes of current branch.
     */
    stash: Function;
    /**
     * - Checks if status is clean.
     */
    isStatusClean: Function;
    /**
     * - Creates a pointer (tag) to current commmit.
     */
    tag: Function;
};
import commit = require("./commit");
import clean = require("./clean");
import clone = require("./clone");
import checkout = require("./checkout");
import branch = require("./branch");
import getBranchName = require("./getBranchName");
import getDefaultBranch = require("./getDefaultBranch");
import getIssue = require("./getIssue");
import getIssues = require("./getIssues");
import getLastCommit = require("./getLastCommit");
import getLastCommitMsg = require("./getLastCommitMsg");
import getLastCommitHash = require("./getLastCommitHash");
import getLastTag = require("./getLastTag");
import getLastTags = require("./getLastTags");
import getRepoName = require("./getRepoName");
import pullRequest = require("./pullRequest");
import pull = require("./pull");
import push = require("./push");
import reset = require("./reset");
import stash = require("./stash");
import isStatusClean = require("./isStatusClean");
import tag = require("./tag");
export { commit, clean, clone, checkout, branch, getBranchName, getDefaultBranch, getIssue, getIssues, getLastCommit, getLastCommitMsg, getLastCommitHash, getLastTag, getLastTags, getRepoName, pullRequest, pull, push, reset, stash, isStatusClean, tag };
