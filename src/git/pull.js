const execSync = require('../shell/execSync');

/**
 * @access public
 * @param {Object} [options]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Pulls latest
 */
module.exports = function pull(options) {
    execSync('git pull --quiet --all', options);
};
