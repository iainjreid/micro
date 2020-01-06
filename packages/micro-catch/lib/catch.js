'use strict';

/**
 * Safely invokes the provided function.
 *
 * @example
 *
 * M.catch(() => throw Error())
 *
 * @param fn - A function that may throw an error
 *
 * @returns The return value of `fn` or `null` is an error was thrown
 */
module.exports = fn => function () {
  try {
    return fn.apply(this, arguments)
  } catch ({ message }) {
    console.warn(`Handled error: "${message}"`)
  }
}
