const fs = require('fs');
const path = require('path');

const execSync = require('../shell/execSync');

/**
 * @access public
 * @since 1.9.5
 * @param {Object} [options={}]
 * @param {String} [options.gitPath] - Path to .git folder
 * @param {String} [options.cwd]
 * @desc Gets the name of the default branch
 * @returns {String|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getDefaultBranch(options) {
    try {
        const { cwd, gitPath } = options || {};

        let defaultBranch = '';

        if (gitPath) {
            const completePath = path.join(cwd, gitPath);

            if (fs.existsSync(completePath)) {
                defaultBranch = execSync('cat .git/refs/remotes/origin/HEAD', {
                    cwd: completePath,
                    dryRun: false
                });

                defaultBranch = defaultBranch.substring(defaultBranch.lastIndexOf('/') + 1);

                if (defaultBranch.indexOf(':') !== -1) {
                    defaultBranch = '';
                }
            }
        }

        if (!defaultBranch) {
            defaultBranch = execSync('git config --get init.defaultBranch', {
                cwd,
                dryRun: false
            });
        }

        // remove new lines
        return defaultBranch;
    } catch (ex) {}

    return null;
};
