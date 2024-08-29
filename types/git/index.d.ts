/**
 * - git
 */
export type git = {
    /**
     * - Creates a branch.
     */
    branch: Function;
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
     * - Deletes a tag remotely and locally.
     */
    deleteTag: Function;
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
     * - Gets an Url if there is a PR for current branch and the PS is open, otherwise null.
     */
    getPullRequestUrl: Function;
    /**
     * - Merge base branch into current branch.
     */
    merge: Function;
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
     * - Push tags to given remote branch.
     */
    pushTags: Function;
    /**
     * - Discards all changes to current branch.
     */
    reset: Function;
    /**
     * - Rebase current branch with base branch.
     */
    rebase: Function;
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
import branch = require("./branch");
import commit = require("./commit");
import clean = require("./clean");
import clone = require("./clone");
import checkout = require("./checkout");
import deleteTag = require("./deleteTag");
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
import getPullRequestUrl = require("./getPullRequestUrl");
import merge = require("./merge");
import pullRequest = require("./pullRequest");
import pull = require("./pull");
import push = require("./push");
import pushTags = require("./pushTags");
import reset = require("./reset");
import rebase = require("./rebase");
import stash = require("./stash");
import isStatusClean = require("./isStatusClean");
import tag = require("./tag");
export { branch, commit, clean, clone, checkout, deleteTag, getBranchName, getDefaultBranch, getIssue, getIssues, getLastCommit, getLastCommitMsg, getLastCommitHash, getLastTag, getLastTags, getRepoName, getPullRequestUrl, merge, pullRequest, pull, push, pushTags, reset, rebase, stash, isStatusClean, tag };
