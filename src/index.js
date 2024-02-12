const console = require('./console');
const fs = require('./fs');
const git = require('./git');
const object = require('./object');
const shell = require('./shell');
const string = require('./string');

/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} Util
 * @property {Object} console - Console logging
 * @property {Object} fs - Node's file system
 * @property {Object} git - Git Synchronous
 * @property {Object} object - Object Manipulations
 * @property {Object} shell - Shell commands
 * @property {Object} string - String Manipulations
 */
module.exports = { console, fs, git, object, shell, string };
