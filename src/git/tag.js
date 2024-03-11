const execSync = require('../shell/execSync');

/**
 * @access public
 * @param {String} annotate - Name of the tag
 * @param {String} message
 * @param {Object} [options={}]
 * @param {Boolean} [options.force=false]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Create an annotated tag locally.
 * @throws {Error}
 */
module.exports = function tag(annotate, message, options) {
    const { force = false } = options || {};

    const forceFlag = force ? '--force' : '';

    // todo: sanitize message

    execSync(`git tag ${forceFlag} --annotate ${annotate} --message "${message}"`, options);
};
