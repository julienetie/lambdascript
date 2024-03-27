/**
 * A utility object containing functions related to tail recursion.
 * @namespace
 */
export const tail = {
     /**
     * Executes a callback function in a tail-recursive manner.
     * @param {Function} callback - The callback function to be executed.
     * @param {...*} params - The parameters to be passed to the callback function.
     * @returns {*} - The result of the callback function execution.
     */
    linear: (callback, ...params) => {
        let value = callback(...params)
        while (typeof value === 'function') value = value()
        return value
    }
}

