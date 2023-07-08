const console = require('./console');
const fs = require('./fs');
const gitSync = require('./gitSync');
const object = require('./object');
const shell = require('./shell');
const string = require('./string');

/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} Util
 * @property {Object} console - Console logging
 * @property {Object} fs - Node's file system
 * @property {Object} gitSync - Git Synchronous
 * @property {Object} object - Object Manipulations
 * @property {Object} shell - Shell commands
 * @property {Object} string - String Manipulations
 */
module.exports = { console, fs, gitSync, object, shell, string };
