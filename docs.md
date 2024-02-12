## Typedefs

<dl>
<dt><a href="#Util">Util</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#console">console</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#fs">fs</a> : <code>Object</code></dt>
<dd><p>fs</p>
</dd>
<dt><a href="#git">git</a> : <code>Object</code></dt>
<dd><p>git</p>
</dd>
<dt><a href="#object">object</a> : <code>Object</code></dt>
<dd><p>object</p>
</dd>
<dt><a href="#shell">shell</a> : <code>Object</code></dt>
<dd><p>shell</p>
</dd>
<dt><a href="#string">string</a> : <code>Object</code></dt>
<dd><p>string</p>
</dd>
</dl>

<a name="Util"></a>

## Util : <code>Object</code>

**Kind**: global typedef  
**Access**: public  
**Since**: 1.0.0  
**Properties**

| Name    | Type                | Description          |
| ------- | ------------------- | -------------------- |
| console | <code>Object</code> | Console logging      |
| fs      | <code>Object</code> | Node's file system   |
| git     | <code>Object</code> | Git Synchronous      |
| object  | <code>Object</code> | Object Manipulations |
| shell   | <code>Object</code> | Shell commands       |
| string  | <code>Object</code> | String Manipulations |

<a name="console"></a>

## console : <code>Object</code>

**Kind**: global typedef  
**Access**: public  
**Since**: 1.0.0  
**Properties**

| Name  | Type                  | Description                                              |
| ----- | --------------------- | -------------------------------------------------------- |
| debug | <code>function</code> | Console log a debug message                              |
| info  | <code>function</code> | Console log an information message                       |
| error | <code>function</code> | Console log an error message                             |
| line  | <code>function</code> | Console log a message represented by lines "-----------" |
| log   | <code>function</code> | Console log a message                                    |
| warn  | <code>function</code> | Console log a warning message                            |
| cr    | <code>function</code> | Console log a carriage return (blank line)               |

<a name="fs"></a>

## fs : <code>Object</code>

fs

**Kind**: global typedef  
**Access**: public  
**Since**: 1.0.0  
**Properties**

| Name             | Type                  | Description                                                                  |
| ---------------- | --------------------- | ---------------------------------------------------------------------------- |
| copy             | <code>function</code> | Copies folders and files from a source path to a target path asynchronously. |
| copySync         | <code>function</code> | Copies folders and files from a source path to a target path.                |
| getFolders       | <code>function</code> | Gets folders in a folder.                                                    |
| pathExists       | <code>function</code> | Checks if target path exists.                                                |
| deleteFolderSync | <code>function</code> | Removes a folder synchronously.                                              |
| deleteFolder     | <code>function</code> | Removes a folder asynchronously.                                             |

<a name="git"></a>

## git : <code>Object</code>

git

**Kind**: global typedef  
**Access**: public  
**Since**: 1.0.0  
**Properties**

| Name              | Type                  | Description                                    |
| ----------------- | --------------------- | ---------------------------------------------- |
| commit            | <code>function</code> | Git commits to current branch.                 |
| clean             | <code>function</code> | Cleans/Discards all changes to current branch. |
| clone             | <code>function</code> | Clones a repo.                                 |
| checkout          | <code>function</code> | Checksout a branch and pulls latest.           |
| branch            | <code>function</code> | Creates a branch.                              |
| getBranchName     | <code>function</code> | Gets the name of the current branch.           |
| getIssue          | <code>function</code> | Gets issue from repo.                          |
| getIssues         | <code>function</code> | Gets issues from repo.                         |
| getLastCommit     | <code>function</code> | Gets the last commit.                          |
| getLastCommitHash | <code>function</code> | Gets the last commit hash.                     |
| getLastCommitMsg  | <code>function</code> | Gets the last commit message.                  |
| getLastTag        | <code>function</code> | Gets the last tag.                             |
| getRepoName       | <code>function</code> | Gets the repository name.                      |
| pullRequest       | <code>function</code> | Creates a PR.                                  |
| pull              | <code>function</code> | Pulls latest.                                  |
| push              | <code>function</code> | Push commits to given remote branch.           |
| reset             | <code>function</code> | Discards all changes to current branch.        |
| stash             | <code>function</code> | Stashes all changes of current branch.         |
| isStatusClean     | <code>function</code> | Checks if status is clean.                     |
| tag               | <code>function</code> | Creates a pointer (tag) to current commmit.    |

<a name="object"></a>

## object : <code>Object</code>

object

**Kind**: global typedef  
**Access**: public  
**Since**: 1.0.0  
**Properties**

| Name     | Type                  | Description                         |
| -------- | --------------------- | ----------------------------------- |
| toString | <code>function</code> | Converts objects to a string value. |

<a name="shell"></a>

## shell : <code>Object</code>

shell

**Kind**: global typedef  
**Access**: public  
**Since**: 1.0.0  
**Properties**

| Name          | Type                  | Description                            |
| ------------- | --------------------- | -------------------------------------- |
| cwd           | <code>function</code> | Gets current working directory name.   |
| execAsync     | <code>function</code> | Execute shell commands asynchronously. |
| execSync      | <code>function</code> | Execute shell commands.                |
| commandExists | <code>function</code> | Checks if command exists in PATH.      |

<a name="string"></a>

## string : <code>Object</code>

string

**Kind**: global typedef  
**Access**: public  
**Since**: 1.0.0  
**Properties**

| Name    | Type                  | Description                                           |
| ------- | --------------------- | ----------------------------------------------------- |
| replace | <code>function</code> | Replaces all entries of `template` with given `data`. |
