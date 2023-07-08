const { shell } = require('../../src');

describe('commandExists', () => {
    it('git should exist', () => {
        expect(shell.commandExists('git')).toStrictEqual(true);
    });
    it('xywzq should not exist', () => {
        expect(shell.commandExists('xywzq')).toStrictEqual(false);
    });
});
