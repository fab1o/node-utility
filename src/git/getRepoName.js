const execSync = require('../shell/execSync');

/**
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets the repository name
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getRepoName(options = {}) {
    try {
        // force to not run dry
        options.dryRun = false;

        const name = execSync('basename $(git remote get-url origin)', options);

        // remove new lines
        return name.replace(/[\r\n]+/g, '');
    } catch (ex) {}

    return null;
};
