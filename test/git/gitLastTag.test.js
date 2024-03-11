const { git } = require('../../src');

describe('getLastTag', () => {
    it('should get last tag', () => {
        const tag = git.getLastTag();

        expect(typeof tag).toBe('string');
    });

    it('should get last annotated tag', () => {
        const tag = git.getLastTag({ annotated: true });

        expect(typeof tag).toBe('string');
    });
});
