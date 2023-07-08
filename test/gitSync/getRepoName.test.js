const { gitSync } = require('../../src');

describe('getRepoName', () => {
    it('should get current repo name', () => {
        const name = gitSync.getRepoName();

        expect(name).toBe('node-utility.git');
    });
});
