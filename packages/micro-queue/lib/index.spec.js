'use strict';

const mQueue = require('../');

describe('order:', () => {
  it('should execute functions in the order that they are supplied', done => {
    const clock = [];

    mQueue(_done => {
      setTimeout(() => {
        clock[clock.length] = 'one';
        _done();
      }, 100);
    });

    mQueue(_done => {
      setTimeout(() => {
        clock[clock.length] = 'two';
        _done();
      }, 50);
    });

    mQueue(_done => {
      clock[clock.length] = 'three';
      _done();
    });

    mQueue(() => {
      expect(clock).toEqual(['one', 'two', 'three']);
      done();
    });
  });
});
