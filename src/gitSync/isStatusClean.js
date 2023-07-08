const execSync = require('../shell/execSync');

/**
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun=false]
 * @desc Checks if status is clean
 * @returns {Boolean}
 */
module.exports = function isStatusClean(options = {}) {
    const { dryRun = false } = options;

    const output = execSync('git status --short', options);

    // if output is empty string, status is clean
    return !output || dryRun;
};
