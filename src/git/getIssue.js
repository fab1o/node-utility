const execSync = require('../shell/execSync');

/**
 * @param {Number} number - Issue number
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Gets issue from repo
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getIssue(number, options = {}) {
    try {
        // force to not run dry
        options.dryRun = false;

        return execSync(`hub issue show ${number}`, options);
    } catch (ex) {}

    return null;
};
