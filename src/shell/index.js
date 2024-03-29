/**
 * shell - Shell handling
 */

/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} shell - shell
 * @property {Function} cwd - Gets current working directory name.
 * @property {Function} execAsync - Execute shell commands asynchronously.
 * @property {Function} execSync - Execute shell commands.
 * @property {Function} commandExists - Checks if command exists in PATH.
 */
const cwd = require('./cwd');
const execAsync = require('./execAsync');
const execSync = require('./execSync');
const commandExists = require('./commandExists');

module.exports = {
    cwd,
    execAsync,
    execSync,
    commandExists
};
