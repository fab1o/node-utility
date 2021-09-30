const { fs } = require('../../src');

describe('cwd', () => {
    it('should get the current working directory', () => {
        const cwd = fs.cwd();

        expect(cwd).toMatch(/node-utility$/);
    });
});
