# node-utility

A swiss-knife Library for Node applications.

## Documentation

| Name    | Type                | Description          |
| ------- | ------------------- | -------------------- |
| console | <code>Object</code> | Console logging      |
| fs      | <code>Object</code> | File system          |
| git     | <code>Object</code> | Git Synchronous      |
| object  | <code>Object</code> | Object Manipulations |
| shell   | <code>Object</code> | Shell commands       |
| string  | <code>Object</code> | String Manipulations |

See [full documentation](/docs.md)

### Prerequisites

Latest versions of:

-   git: [https://git-scm.com/downloads](https://git-scm.com/downloads)
-   hub: [https://hub.github.com](https://hub.github.com)

**Setup hub for GitHub Enterprise**

1. If you're runnning GitHub Enterprise, run this command to set your hostname:

    ```sh
    git config --global --add hub.host <your_github_host>
    ```

2. Run a simple command **on any repository folder** to create an OAuth token, for instance:

    ```sh
    hub pr list
    ```

    It should ask for your username and password if that was your first time using hub.
