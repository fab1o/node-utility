const { shell } = require('../../src');

describe('cwd', () => {
    it('should get the current working directory', () => {
        const cwd = shell.cwd();

        expect(cwd).toMatch(/\/node-utility$/);
    });
});
