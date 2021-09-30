const { gitSync } = require('../../src');

describe('getCurrentBranch', () => {
    it('should get nothing with dryRun', () => {
        const branch = gitSync.getCurrentBranch(true);

        expect(branch).toBe('');
    });
});
