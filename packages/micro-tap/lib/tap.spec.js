'use strict';

const Tap = require('./tap');

describe('Tap:', () => {
  it('should recieve the value from a promise chain', done => {
    Promise.resolve('foo')
      .then(Tap((value) => expect(value).toBe('foo')))
      .then(Tap((value) => expect(value).toBe('foo')))
      .then(() => {
        done();
      });
  });
});
