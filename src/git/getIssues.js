const execSync = require('../shell/execSync');

/**
 * @access public
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets issues from repo
 * @returns {Array<{number: Number, title: String}>|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getIssues(options) {
    try {
        const { cwd } = options || {};

        const stdout = execSync(`hub issue --state "open" --format "%i|%t"`, {
            cwd,
            dryRun: false
        });

        const issues = stdout.split('#');

        return issues
            .map((issue) => {
                const fields = issue.split('|');
                const number = Number(fields[0]);
                const title = fields[1];

                return {
                    number,
                    title
                };
            })
            .filter((p) => !!p.number);
    } catch (ex) {}

    return null;
};
