const execSync = require('../shell/execSync');

/**
 * @access public
 * @param {Object} [options]
 * @param {Boolean} [options.prune=false]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Pulls latest
 */
module.exports = function pull(options) {
    const { prune = false } = options || {};

    const pruneFlag = prune ? '--prune' : '';

    execSync(`git pull ${pruneFlag} --quiet --all`, options);
};
