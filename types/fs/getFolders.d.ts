/// <reference types="node" />
declare function _exports(source: string, nameRegExp?: RegExp, cwd?: string): Array<fs.Dirent> | null;
export = _exports;
import fs = require("fs");
