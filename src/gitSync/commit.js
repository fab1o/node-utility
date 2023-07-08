const execSync = require('../shell/execSync');

const isStatusClean = require('./isStatusClean');

/**
 * @param {String} message
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Git commits to current branch
 * @returns {Boolean} Whether successful or not
 */
module.exports = function commit(message, options) {
    execSync('git add .', options);
    execSync(`git commit --quiet -m "${message}"`, options);

    return isStatusClean(options);
};
