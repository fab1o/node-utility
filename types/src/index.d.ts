export type Util = {
    /**
     * - Console logging
     */
    console: any;
    /**
     * - Node's file system
     */
    fs: any;
    /**
     * - Git Synchronous
     */
    git: any;
    /**
     * - Object Manipulations
     */
    object: any;
    /**
     * - Shell commands
     */
    shell: any;
    /**
     * - String Manipulations
     */
    string: any;
};
import console = require("./console");
import fs = require("./fs");
import git = require("./git");
import object = require("./object");
import shell = require("./shell");
import string = require("./string");
export { console, fs, git, object, shell, string };
