const execSync = require('../shell/execSync');

/**
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Pulls latest
 */
module.exports = function pull(options) {
    execSync('git pull --quiet', options);
};
