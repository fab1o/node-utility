const console = require('./index');

describe('line', () => {
    it('should print lines', () => {
        const logSpy = jest.spyOn(global.console, 'log');

        console.line(10);

        expect(logSpy).toHaveBeenCalledWith('----------');
    });
});
