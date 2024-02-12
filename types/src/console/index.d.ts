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
     * - Console log a new line (black message)
     */
    newLine: Function;
};
