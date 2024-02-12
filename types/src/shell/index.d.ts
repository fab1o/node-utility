/**
 * - shell
 */
export type shell = {
    /**
     * - Gets current working directory name.
     */
    cwd: Function;
    /**
     * - Execute shell commands asynchronously.
     */
    execAsync: Function;
    /**
     * - Execute shell commands.
     */
    execSync: Function;
    /**
     * - Checks if command exists in PATH.
     */
    commandExists: Function;
};
import cwd = require("./cwd");
import execAsync = require("./execAsync");
import execSync = require("./execSync");
import commandExists = require("./commandExists");
export { cwd, execAsync, execSync, commandExists };
