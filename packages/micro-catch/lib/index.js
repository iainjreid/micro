/* vim: set et ts=2 cc=120: */

'use strict';

module.exports = fn => function () {
  try {
    return fn.apply(this, arguments)
  } catch ({ message }) {
    console.warn(`Handled error: "${message}"`)
  }
}

