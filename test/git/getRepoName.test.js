const { git } = require('../../src');

describe('getRepoName', () => {
    it('should get current repo name', () => {
        const name = git.getRepoName();

        expect(name).toBe('node-utility.git');
    });
});
