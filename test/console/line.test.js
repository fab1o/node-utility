const console = require('../../src/console/index');

describe('console.line', () => {
    let logSpy;

    beforeEach(() => {
        logSpy = jest.spyOn(global.console, 'log');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should print lines', () => {
        console.line(1);

        expect(logSpy).toHaveBeenCalledTimes(1);
    });

    it('should print red lines', () => {
        console.line.red(1);

        expect(logSpy).toHaveBeenCalledTimes(1);
    });
});
