/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} fs - util.fs
 * @property {Function} copyFolder - Copies a source path to a target path
 * @property {Function} getFiles - Get files in a folder
 * @property {Function} getFilesAndFolders - Get files and folders in a folder. Symbolic links are ignored.
 * @property {Function} getFolders - Get folders in a folder
 * @property {Function} openFolder - Opens a folder. Folder must be side by side
 * @property {Function} pathExists - Checks if target path exists
 */
const copyFolder = require('./copyFolder');
const getFiles = require('./getFiles');
const getFilesAndFolders = require('./getFilesAndFolders');
const getFolders = require('./getFolders');
const openFolder = require('./openFolder');
const pathExists = require('./pathExists');

module.exports = {
    copyFolder,
    getFiles,
    getFilesAndFolders,
    getFolders,
    openFolder,
    pathExists
};
