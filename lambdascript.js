/**
 * Empty string value.
 * @type {string}
 */
export const empty = ''


/**
 * A utility object containing functions related to tail recursion.
 * @namespace
 */
export const tail = {
    /**
    * Executes a callback function in a linear tail-recursive manner.
    * @param {Function} callback - The callback function to be executed.
    * @param {...*} args - The parameters to be passed to the callback function.
    * @returns {*} - The result of the callback function execution.
    */
    linear: (callback, ...args) => {
        let value = callback(...args)
        while (typeof value === 'function') value = value()
        return value
    },
    /**
     * Executes a function with tail call optimization (TCO) using trampolining.
     * @param {Function} callback - The function to execute with TCO.
     * @returns {Function} - A trampoline function that accepts any number of arguments.
     */
    trampoline: callback => (...args) => {
        /**
         * Helper function to update the arguments for the next iteration.
         * @param {...*} nextArgs - The new parameters for the next iteration.
         */
        const newArgs = (...nextArgs) => void (args = nextArgs)

        let result

        while (result === undefined) result = callback(newArgs, ...args)
        return result
    }
}

/**
 * Alias for `tail.trampoline` function.
 * @memberof tail
 * @function
 * @name toc
 * @type {Function}
 */
export const toc = tail.trampoline

/**
 * Alias for `tail.linear` function.
 * @memberof tail
 * @function
 * @name ltr
 * @type {Function}
 */
export const ltr = tail.linear

/**
 * Composes multiple functions into a single function.
 *
 * @param {...Function} fns - The functions to compose.
 * @returns {Function} A new function that represents the composition of the provided functions.
 */
export const comp = (...fns) => arg => fns.reduceRight((acc, fn) => fn(acc), arg)

/**
 * Chains multiple functions, applying them sequentially from left to right.
 *
 * @param {...Function} fns - The functions to chain.
 * @returns {Function} A new function that represents the chaining of the provided functions.
 */
export const pipe = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg)

/**
 * Safe utilities for safeguarding final-values before being exposed.
 * @namespace
 */
export const safe = {
    /**
     * Prevent non-string values for the final-value.
     * If the value is already a string, returns it.
     * If a placeholder function is provided, returns the result of the function if it returns a string.
     * Otherwise, returns the provided placeholder value.
     * @param {*} value - The value to convert to a string.
     * @param {string|function} [placeholder=empty] - The placeholder value or function.
     * @returns {string} The converted string value.
     */
    str: (value, placeholder = empty) => {
        if(typeof value === 'string') return value
        if(typeof placeholder === 'function') {
            const newPlaceholderValue = placeholder(value)
            return typeof newPlaceholderValue === 'string' ? newPlaceholderValue : empty 
        }
        return placeholder
    },

    /**
     * Prevent non-numeric values for the final-value.
     * If the value is already a number and not NaN, returns it.
     * If a placeholder function is provided, returns the result of the function if it returns a number and not NaN.
     * Otherwise, returns the provided placeholder value.
     * @param {*} value - The value to convert to a numeric value.
     * @param {number|function} [placeholder=empty] - The placeholder value or function.
     * @returns {number} The converted numeric value.
     */
    numeric: (value, placeholder = empty) => {
        if(typeof value === 'number' && !Number.isNaN(value)) return value
        if(typeof placeholder === 'function') {
            const newPlaceholderValue = placeholder(value)
            return typeof newPlaceholderValue === 'number' && !Number.isNaN(newPlaceholderValue) ? newPlaceholderValue : empty 
        }
        return placeholder   
    },

    /**
     * Prevent non-integer values for the final-value.
     * If the value is already an integer, returns it.
     * If a placeholder function is provided, returns the result of the function if it returns an integer.
     * Otherwise, returns the provided placeholder value.
     * @param {*} value - The value to convert to an integer.
     * @param {number|function} [placeholder=empty] - The placeholder value or function.
     * @returns {number} The converted integer value.
     */
    int: (value, placeholder = empty) => {
        if(Number.isInteger(value)) return value
        if(typeof placeholder === 'function') {
            const newPlaceholderValue = placeholder(value)
            return Number.isInteger(newPlaceholderValue) ? newPlaceholderValue : empty 
        }
        return placeholder   
    }
}

/**
 * Checks if a value is an array.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is an array, else false.
 */
export const isArray = Array.isArray

/**
 * Checks if a value is a BigInt.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is a BigInt, else false.
 */
export const isBigInt = value => typeof value === 'bigint'

/**
 * Checks if a value is a boolean.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is a boolean, else false.
 */
export const isBoolean = value => typeof value === 'boolean'

/**
 * Checks if a value is a function.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is a function, else false.
 */
export const isFunction = value => typeof value === 'function'

/**
 * Checks if a value is an integer.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is an integer, else false.
 */
export const isInteger = value => Number.isInteger(value)

/**
 * Checks if a value is NaN (Not a Number).
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is NaN, else false.
 */
export const isNaN = value => Number.isNaN(value)

/**
 * Checks if a value is numeric.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is numeric, else false.
 */
export const isNumeric = value => typeof value === 'number' && !Number.isNaN(value)

/**
 * Checks if a value is an object.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is an object, else false.
 */
export const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value)

/**
 * Checks if a value is a string.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is a string, else false.
 */
export const isString = value => typeof value === 'string'

/**
 * Checks if a value is a symbol.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is a symbol, else false.
 */
export const isSymbol = value => typeof value === 'symbol'

/**
 * Checks if a value is not undefined, null, or NaN.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is not undefined, null, or NaN, else false.
 */
export const isNonValue = value => !(value === undefined || value === null || Number.isNaN(value))
