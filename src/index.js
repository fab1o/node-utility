const fs = require('./fs');
const gitSync = require('./gitSync');
const console = require('./console');
const object = require('./object');
const string = require('./string');

/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} util - Utility belt
 * @property {Object} fs - Node's file system
 * @property {Object} gitSync - Git Synchronous
 * @property {Object} console - Console logging
 * @property {Object} object - Object Manipulations
 * @property {Object} string - String Manipulations
 */
const util = { fs, gitSync, console, object, string };

module.exports = util;
