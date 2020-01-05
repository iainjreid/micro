'use strict';

module.exports = (min, max, value) => {
  return value < min ? min : value > max ? max : value;
}
