'use strict';

const microCatch = require('../');

describe('handling:', () => {
  it('should catch the error', () => {
    microCatch(() => {
      throw Error();
    })();
  });
});
