'use strict';

/**
 * Access the value in a composition without consuming it.
 *
 * @example
 *
 * M.tap(console.log)("foo")
 *
 * @param fn - The function to be executed
 *
 * @returns A composable function
 */
module.exports = (fn) => (arg) => {
  fn(arg);
  return arg;
};
