const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 2.0.2
 * @param {String} tagName - Name of the tag
 * @param {String} message
 * @param {Object} [options={}]
 * @param {Boolean} [options.force=false]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Create an annotated tag locally.
 * @throws {Error}
 */
module.exports = function tag(tagName, message, options) {
    const { force = false } = options || {};

    const forceFlag = force ? '--force' : '';

    // todo: sanitize message

    execSync(`git tag ${forceFlag} --annotate "${tagName}" --message "${message}"`, options);
};
