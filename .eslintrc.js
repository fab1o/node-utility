module.exports = {
    env: {
        node: true
    },
    extends: [
        '@fab1o/eslint-config-base',
        '@fab1o/eslint-config-base/addon/jsdoc',
        '@fab1o/eslint-config-base/addon/prettier'
    ],
    rules: {
        'no-console': 'off',
        'no-param-reassign': 'off'
    }
};
