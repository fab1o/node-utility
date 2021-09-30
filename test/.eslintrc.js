module.exports = {
    rules: {
        // allow sparse arrays
        'no-sparse-arrays': 'off',

        // allow unused vars so examples in tests are more clear
        'no-unused-vars': 'off'
    },
    settings: {
        'disable/plugins': ['jsdoc', 'require-jsdoc-except']
    }
};
