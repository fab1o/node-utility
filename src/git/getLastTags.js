const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.9.5
 * @param {Object} [qty=1] - Quantity of tags to retrieve.
 * @param {Object} [options={}]
 * @param {Boolean} [options.annotated=false] - Order by taggerdate (only works for annotated tags)
 * @param {String} [options.cwd]
 * @desc Gets the last tags
 * @returns {String[]|null} - Return an array of tags or null if non existent. If annotated is true, returns null when it can't find annotated tags.
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getLastTags(qty = 1, options = {}) {
    try {
        const { cwd, annotated = false } = options || {};

        execSync('git fetch --quiet --tags --all --prune --prune-tags', {
            cwd,
            dryRun: false
        });

        if (annotated) {
            // check if at least 1 annotated exists
            const outputAnnotated = execSync(
                `git for-each-ref refs/tags --sort=-taggerdate --format='%(taggerdate)' --count=1`,
                {
                    cwd,
                    dryRun: false
                }
            );

            if (!outputAnnotated) {
                return null;
            }
        }

        const orderBy = annotated ? 'taggerdate' : 'committerdate';
        const count = qty || 1;

        const output = execSync(
            `git for-each-ref refs/tags --sort=-${orderBy} --format='%(refname:short)' --count=${count}`,
            {
                cwd,
                dryRun: false
            }
        );

        if (!output) {
            return null;
        }

        if (count === 1) {
            return [output];
        }

        const tags = output.split('\n');

        if (!tags[0]) {
            return null;
        }

        return tags;
    } catch (ex) {}

    return null;
};
