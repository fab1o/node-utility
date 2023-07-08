/**
 * @access public
 * @since 1.0.0
 * @param {*} value
 * @desc Converts any type of value to string for use in `replaceTemplate`
 * @returns {String}
 */
function toString(value) {
    if (Array.isArray(value)) {
        return value.join('');
    }

    if (value == null) {
        return '';
    }

    return `${value}`;
}

/**
 * @param {String} template - Templated string
 * @param {Object} data
 * @desc Replaces all entries of `template` with given `data`
 * Property names must match entries in `template`, entries are defined as between < >
 * @returns {String} Returns `template` with entries modified by values in `data`
 */
module.exports = function replace(template, data) {
    if (typeof data !== 'object') {
        return template.replace(/<[^>]*>/, toString(data));
    }

    const prDesc = Object.entries(data).reduce((prev, curr) => {
        const key = curr[0];
        const value = curr[1];

        const regexp = new RegExp(`<${key}>`, 'igm');

        return prev.replace(regexp, toString(value));
    }, template);

    return prDesc;
};
