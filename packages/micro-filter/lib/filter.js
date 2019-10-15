'use strict';

const curry = require('@emphori/micro-curry');

module.exports = curry((fn, target) => {
  const out = [];

  for (let i = 0, n = target.length; i < n; i++) {
    if (fn(target[i])) {
      out.push(target[i]);
    }
  }

  return out;
});
