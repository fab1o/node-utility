const execSync = require('../shell/execSync');

/**
 * @param {Object} [options={}]
 * @param {String} [options.cwd]
 * @desc Gets issues from repo
 * @returns {Array<{number: Number, title: String}>|null}
 * @note Runs without dryRun because this command just queries
 */
module.exports = function getIssues(options = {}) {
    try {
        // force to not run dry
        options.dryRun = false;

        const stdout = execSync(`hub issue --state "open" --format "%i|%t"`, options);

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
    } catch {}

    return null;
};
