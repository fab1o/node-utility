const { git } = require('../../src');

describe('getLastTags', () => {
    it('should get last tags', () => {
        const tags = git.getLastTags(2);

        expect(Array.isArray(tags)).toBe(true);
    });
});
