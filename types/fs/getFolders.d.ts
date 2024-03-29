/// <reference types="node" />
declare function _exports(source: string, nameRegExp?: RegExp, options?: {
    cwd?: string;
    skip?: boolean;
}): Array<fs.Dirent> | null;
export = _exports;
import fs = require("fs");
