const process = require('child_process');

/**
 * @access public
 * @since 1.7.0
 * @param {String} command - Command to execute
 * @param {Object} [options={}]
 * @param {String} [options.cwd=process.cwd()] - Working path to set git to work in
 * @param {Boolean} [options.dryRun=false] - Do not run command, only logs them
 * @desc Execute shell commands asynchroniously.
 * @returns {String} Output
 * @throws {Error}
 */
module.exports = function execAsync(command, options) {
    const { cwd, dryRun = false } = options || {};

    const execOptions = {
        cwd,
        stdio: 'pipe'
    };

    if (dryRun) {
        console.log(command, execOptions);

        return '';
    }

    return new Promise((resolve, reject) => {
        process.exec(command, execOptions, (error, stdout, stderr) => {
            if (error) {
                reject(stdout.trim() || stderr.trim() || error.cmd?.trim());
            } else {
                resolve(stdout.trim());
            }
        });
    });
};
