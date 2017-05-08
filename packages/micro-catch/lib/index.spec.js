/* vim: set et ts=2 cc=120: */

'use strict';

// Dependencies
const expect = require('chai').expect;
const microCatch = require('../');

describe('handling:', () => {
  it('should catch the error', () => {
    microCatch(() => {
      throw Error();
    })();
  });
});
