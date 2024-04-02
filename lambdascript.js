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
    // const newArgs = (...nextArgs) => void (args = nextArgs)

    // let result

    // while (result === undefined) result = callback(newArgs, ...args)
    // return result
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
    if (typeof value === 'string') return value
    if (typeof placeholder === 'function') {
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
     * @param {string|function} [placeholder=empty] - The placeholder value or function.
     * @returns {number|string} The converted numeric value.
     */
  numeric: (value, placeholder = empty) => {
    if (typeof value === 'number' && !Number.isNaN(value)) return value
    if (typeof placeholder === 'function') {
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
     * @param {string|function} [placeholder=empty] - The placeholder value or function.
     * @returns {number|string} The converted integer value.
     */
  int: (value, placeholder = empty) => {
    if (Number.isInteger(value)) return value
    if (typeof placeholder === 'function') {
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
export const isNonValue = value => value === undefined || value === null || Number.isNaN(value)


/** @param {*} type  */
const createType = type => Symbol(type)

export const string = createType('string')
export const array = createType('array')
export const bigint = createType('bigint')
export const boolean = createType('boolean')
export const _function = createType('_function')
export const integer = createType('integer')
export const nan = createType('nan')
export const numeric = createType('numeric')
export const _null = createType('_null')
export const object = createType('object')
export const symbol = createType('symbol')
export const _undefined = createType('_undefined')
export const nonValue = createType('nonValue')
export const anyNumber = createType('anyNumber')
export const anyObject = createType('anyObject')




const typeCheckers = {
  string: isString,
  array: isArray,
  bigint: isBigInt,
  boolean: isBoolean,
  _function: isFunction,
  integer: isInteger,
  nan: isNaN,
  numeric: isNumeric,
  /** @param {*} value */
  null: value => value === null,
  object: isObject,
  symbol: isSymbol,
    /** @param {*} value */
  undefined: value => value === undefined,
  nonvalue: isNonValue,
    /** @param {*} value */
  anynumber: value => typeof value === 'number',
    /** @param {*} value */
  anyobject: value => typeof value === 'object',
}




/**
 * Exc function checks if a value matches specified types.
 * @param {*} value - The value to be checked.
 * @param {...any} types - The types to be checked against.
 * @returns {Object} An object with error handling methods and a flag indicating whether an error occurred.
 */
export const exc = (value, ...types) => {
  /** @type {any[] | undefined} */
  let results // Variable to store results
  let err = true // Flag to indicate if an error occurred

  // Loop through the specified types
  for (let type of types) {
    let checker

    // Determine the checker based on the type
    switch (type) {
      case undefined:
        checker = 'undefined'
        break
      case null:
        checker = 'null'
        break
      default:
        checker = type.description
    }

    // Check if the value matches the current type
    if (!typeCheckers[checker](value)) {
      // Prepare the results with relevant information
      results = [
        value,
        type.description,
        value === null ? null : value === undefined ? undefined : typeof value,
        ...types.map(type => type.description)
      ]

      err = false // Set error flag to false since an error occurred
      break // Exit the loop once an error is found
    }
  }

  // Return an object with error handling methods
  return {
    /**
     * Error handling method to log an error message.
     * @param {Function} message - Function to generate error message.
     * @returns {boolean} True if no error occurred, otherwise false.
     */
    error: message => {
      if (results === undefined) {
        return true // Return true if no error occurred
      }
      const messageString = message(results) // Generate error message
      console.error(messageString) // Log error message
      return false // Return false to indicate an error
    },
    /**
     * Error handling method to throw a TypeError.
     * @param {Function} message - Function to generate error message.
     * @returns {boolean} True if no error occurred, otherwise false.
     */
    Error: message => {
      if (results === undefined) {
        return true // Return true if no error occurred
      }
      const messageString = message(results) // Generate error message
      throw new TypeError(messageString) // Throw TypeError
    },
    /**
     * Error handling method to log a warning message.
     * @param {Function} message - Function to generate warning message.
     * @returns {boolean} True if no error occurred, otherwise false.
     */
    warn: message => {
      if (results === undefined) {
        return true // Return true if no error occurred
      }
      const messageString = message(results) // Generate warning message
      console.warn(messageString) // Log warning message
      return false // Return false to indicate a warning
    },
    /**
     * Flag indicating whether an error occurred.
     * @type {boolean}
     */
    err // Return error flag
  }
}
