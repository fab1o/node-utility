const getLastTags = require('./getLastTags');

/**
 * @access public
 * @since 1.8.4
 * @param {Object} [options={}]
 * @param {Boolean} [options.annotated=false] - Order by taggerdate (only works for annotated tags)
 * @param {String} [options.cwd]
 * @desc Gets the last tag
 * @returns {String|null} - Return a tag or null if non existent. If annotated is true, returns null when it can't find annotated tag.
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getLastTag(options = {}) {
    try {
        const tags = getLastTags(1, options);

        if (tags != null) {
            return tags[0];
        }

        return null;
    } catch (ex) {}

    return null;
};
