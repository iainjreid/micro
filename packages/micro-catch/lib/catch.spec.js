'use strict';

const Catch = require('./catch');

describe('handling:', () => {
  it('should catch the error', () => {
    Catch(() => {
      throw Error();
    })();
  });
});
