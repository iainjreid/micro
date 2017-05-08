/* vim: set et ts=2 cc=120: */

'use strict';

module.exports = fn => {
  try {
    return fn()
  } catch ({ message }) {
    console.warn(`Handled error: "${message}"`)
  }
}

