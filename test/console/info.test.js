const console = require('../../src/console/index');

describe('console.info', () => {
    it('should log info', () => {
        const logSpy = jest.spyOn(global.console, 'info');

        console.info('info');

        expect(logSpy).toHaveBeenCalledTimes(1);

        jest.clearAllMocks();
    });
});
