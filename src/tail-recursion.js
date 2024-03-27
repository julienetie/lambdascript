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

        let result = undefined

        while (result === undefined) result = callback(newArgs, ...args)
        return result
    }
}
