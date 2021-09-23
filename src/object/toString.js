/**
 * @access public
 * @since 1.0.0
 * @param {Object} value
 * @desc Converts objects to a string value.
 * For Array using join(), for Date using toISOString() and for Object using JSON.stringify()
 * @returns {String}
 */
module.exports = function toString(value) {
    switch (typeof value) {
        case 'object':
            if (value == null) {
                return `${value}`;
            }

            switch (value.constructor.name) {
                case 'Date':
                    return value.toISOString();

                case 'Array':
                    return value.join();

                case 'Boolean':
                case 'Number':
                case 'String':
                    return `${value}`;

                case 'Object':
                default:
                    return JSON.stringify(value);
            }

        default:
            return `${value}`;
    }
};
