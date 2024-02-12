const { git } = require('../../src');

describe('getBranchName', () => {
    it('should get current branch', () => {
        const branch = git.getBranchName();

        // prevent new lines to match
        expect(branch).toStrictEqual(expect.stringMatching(/^.+$/));
    });
});
