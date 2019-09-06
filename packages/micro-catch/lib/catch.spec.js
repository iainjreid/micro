'use strict';

const Catch = require('..');

describe('handling:', () => {
  it('should catch the error', () => {
    Catch(() => {
      throw Error();
    })();
  });
});
