declare function _exports(source: string, target: string, options?: {
    cwd?: string;
    skip?: boolean;
    overwrite?: boolean;
}): Promise<{
    source: string;
    target: string;
    copied: boolean;
}>;
export = _exports;
