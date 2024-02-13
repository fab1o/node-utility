const execSync = require('../shell/execSync');

const isStatusClean = require('./isStatusClean');

/**
 * @access public
 * @param {String} message
 * @param {Object} [options]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Git commits to current branch
 * @returns {Boolean} Whether successful or not
 */
module.exports = function commit(message, options) {
    try {
        execSync('git add .', options);

        // todo: sanitize message

        execSync(`git commit --no-verify --quiet --message "${message}"`, options);
    } catch (ex) {}

    return isStatusClean(options);
};
