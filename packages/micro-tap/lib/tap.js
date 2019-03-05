'use strict';

module.exports = (fn) => (arg) => {
  fn(arg);
  return arg;
};
