const { git } = require('../../src');

describe('checkout', () => {
    it('should checkout branch', () => {
        const branchName = git.getBranchName();
        const checkedout = git.checkout(branchName);

        expect(checkedout).toBe(true);
    });

    it('should appear to checkout branch with dryRun', () => {
        const branchName = null;
        const dryRun = true;

        const checkedout = git.checkout(branchName, { dryRun });

        expect(checkedout).toBe(true);
    });
});
