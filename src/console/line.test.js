const console = require('./index');

describe('line', () => {
    it('should checkout branch', () => {
        const logSpy = jest.spyOn(global.console, 'log');

        console.line(10);

        expect(logSpy).toHaveBeenCalledWith('----------');
    });
});
