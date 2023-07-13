const process = require('child_process');

/**
 * @access public
 * @since 1.0.0
 * @param {String} command - Command to execute
 * @param {Object} [options={}]
 * @param {String} [options.cwd] - Working path to set git to work in
 * @param {String} [options.dryRun] - Do not run command, only logs them
 * @desc Execute shell commands
 * @returns {String} Output
 */
module.exports = function execSync(command, options = {}) {
    const { cwd = '.', dryRun = false } = options;

    const execOptions = {
        cwd,
        stdio: 'pipe'
    };

    if (dryRun) {
        console.log(command, execOptions);

        return '';
    }

    return process.execSync(command, execOptions).toString().trim();
};
