/**
 * - fs
 */
export type fs = {
    /**
     * - Copies folders and files from a source path to a target path asynchronously.
     */
    copy: Function;
    /**
     * - Copies folders and files from a source path to a target path.
     */
    copySync: Function;
    /**
     * - Creates nested folder apth if it doesn't exist.
     */
    createFolderPath: Function;
    /**
     * - Gets folders in a folder.
     */
    getFolders: Function;
    /**
     * - Checks if target path exists.
     */
    pathExists: Function;
    /**
     * - Removes a folder synchronously.
     */
    deleteFolderSync: Function;
    /**
     * - Removes a folder asynchronously.
     */
    deleteFolder: Function;
};
import copy = require("./copy");
import copySync = require("./copySync");
import createFolderPath = require("./createFolderPath");
import getFolders = require("./getFolders");
import pathExists = require("./pathExists");
import deleteFolderSync = require("./deleteFolderSync");
import deleteFolder = require("./deleteFolder");
export { copy, copySync, createFolderPath, getFolders, pathExists, deleteFolderSync, deleteFolder };
