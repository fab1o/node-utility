const baseRules = require('@fab1o/eslint-config-base/addon/prettier/config');

const newRules = {
    printWidth: 96
};

module.exports = Object.assign(baseRules, newRules);
