/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} fs - util.fs
 * @property {Function} copyFolder - Copies a source path to a target path
 * @property {Function} cwd - Gets current working directory name
 * @property {Function} getFiles - Gets files in a folder
 * @property {Function} getFilesAndFolders - Gets files and folders in a folder. Symbolic links are ignored.
 * @property {Function} getFolders - Gets folders in a folder
 * @property {Function} openFolder - Opens a folder. Folder must be side by side
 * @property {Function} pathExists - Checks if target path exists
 */
const copyFolder = require('./copyFolder');
const cwd = require('./cwd');
const getFiles = require('./getFiles');
const getFilesAndFolders = require('./getFilesAndFolders');
const getFolders = require('./getFolders');
const openFolder = require('./openFolder');
const pathExists = require('./pathExists');

module.exports = {
    copyFolder,
    cwd,
    getFiles,
    getFilesAndFolders,
    getFolders,
    openFolder,
    pathExists
};
