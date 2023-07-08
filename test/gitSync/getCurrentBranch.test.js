const { gitSync } = require('../../src');

describe('getCurrentBranch', () => {
    it('should get current branch', () => {
        const branch = gitSync.getCurrentBranch();

        // prevent new lines to match
        expect(branch).toStrictEqual(expect.stringMatching(/^.+$/));
    });
});
