const console = require('../../src/console/index');

describe('console.log', () => {
    let logSpy;

    beforeEach(() => {
        logSpy = jest.spyOn(global.console, 'log');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should print log', () => {
        console.log(1);

        expect(logSpy).toHaveBeenCalledTimes(1);
    });

    it('should print red log', () => {
        console.log.red(1);

        expect(logSpy).toHaveBeenCalledTimes(1);
    });
});
