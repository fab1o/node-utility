const execSync = require('../shell/execSync');

/**
 * @param {Number} number - Issue number
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets issue from repo
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getIssue(number, options) {
    try {
        const { cwd } = options || {};

        return execSync(`hub issue show ${number}`, {
            cwd,
            dryRun: false
        });
    } catch (ex) {}

    return null;
};
