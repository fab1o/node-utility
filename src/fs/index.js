/**
 * fs - File System
 */

/**
 * @access public
 * @since 1.0.0
 * @typedef {Object} fs - fs
 * @property {Function} copy - Copies folders and files from a source path to a target path asynchronously.
 * @property {Function} copySync - Copies folders and files from a source path to a target path.
 * @property {Function} createFolderPath - Creates nested folder apth if it doesn't exist.
 * @property {Function} getFolders - Gets folders in a folder.
 * @property {Function} pathExists - Checks if target path exists.
 * @property {Function} deleteFolderSync - Removes a folder synchronously.
 * @property {Function} deleteFolder - Removes a folder asynchronously.
 */
const copy = require('./copy');
const copySync = require('./copySync');
const createFolderPath = require('./createFolderPath');
const getFolders = require('./getFolders');
const pathExists = require('./pathExists');
const deleteFolderSync = require('./deleteFolderSync');
const deleteFolder = require('./deleteFolder');

module.exports = {
    copy,
    copySync,
    createFolderPath,
    getFolders,
    pathExists,
    deleteFolderSync,
    deleteFolder
};
