const execSync = require('../shell/execSync');

/**
 * @param {String} annotate
 * @param {String} message
 * @param {Boolean} [force=false]
 * @param {Object} [options] - Shell command options
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Push commits to given remote branch
 * @throws {Error} If it does not push the commits
 */
module.exports = function tag(annotate, message, force = false, options) {
    const forceFlag = force ? '--force' : '';

    // todo: sanitize message

    execSync(`git tag ${forceFlag} --annotate ${annotate} --message "${message}"`, options);
};
