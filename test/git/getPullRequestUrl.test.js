const { git } = require('../../src');

describe('getPullRequestUrl', () => {
    it('should fail to get pull request Url', () => {
        const url = git.getPullRequestUrl();

        expect(url).toBeNull();
    });
});
