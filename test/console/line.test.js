const console = require('../../src/console/index');

describe('line', () => {
    it('should print lines', () => {
        const logSpy = jest.spyOn(global.console, 'log');

        console.line(1);

        expect(logSpy).toHaveBeenCalledTimes(1);
    });
});
