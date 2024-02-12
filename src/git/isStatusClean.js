const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.0.0
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun=false]
 * @desc Checks if status is clean
 * @returns {Boolean}
 */
module.exports = function isStatusClean(options = {}) {
    const { dryRun = false } = options;

    const output = execSync('git status --porcelain', options);

    // if output is empty string, status is clean
    return !output || dryRun;
};
