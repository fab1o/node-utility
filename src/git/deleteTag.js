const execSync = require('../shell/execSync');

/**
 * @access public
 * @param {String} tagName - Name of the tag
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @param {Boolean} [options.dryRun]
 * @desc Deletes a tag remotely and locally.
 * @throws {Error}
 */
module.exports = function deleteTag(tagName, options) {
    try {
        execSync(`git tag --delete "${tagName}"`, options);
        execSync(`git push --force --delete origin "${tagName}"`, options);
    } catch (ex) {}
};
