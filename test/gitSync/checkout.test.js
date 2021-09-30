const { gitSync } = require('../../src');

describe('checkout', () => {
    it('should checkout branch', () => {
        const currentBranch = gitSync.getCurrentBranch();

        const checkedout = gitSync.checkout(currentBranch);

        expect(checkedout).toBe(true);
    });

    it('should appear to checkout branch with dryRun', () => {
        const checkedout = gitSync.checkout(null, true);

        expect(checkedout).toBe(true);
    });
});
