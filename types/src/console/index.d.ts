export type console = {
    /**
     * - Console log a debug message
     */
    debug: Function;
    /**
     * - Console log an information message
     */
    info: Function;
    /**
     * - Console log an error message
     */
    error: Function;
    /**
     * - Console log a message represented by lines "-----------"
     */
    line: Function;
    /**
     * - Console log a message
     */
    log: Function;
    /**
     * - Console log a warning message
     */
    warn: Function;
    /**
     * - Console log a carriage return (blank line)
     */
    cr: Function;
};
import debug = require("./debug");
import info = require("./info");
import error = require("./error");
import line = require("./line");
import log = require("./log");
import warn = require("./warn");
import cr = require("./cr");
export { debug, info, error, line, log, warn, cr };
