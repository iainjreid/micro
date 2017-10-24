'use strict';

module.exports = (fn, arity = fn.length) => {
  return (...args1) => {
    if (arity <= args1.length) {
      return fn(...args1);
    } else {
      return curry((...args2) => {
        return fn(...args1, ...args2);
      }, arity - args1.length);
    }
  };
};
