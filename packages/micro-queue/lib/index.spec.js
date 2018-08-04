'use strict';

const microQ = require('../');

describe('order:', () => {
  it('should execute functions in the order that they are supplied', done => {
    const clock = [];

    microQ(_done => {
      setTimeout(() => {
        clock[clock.length] = 'one';
        _done();
      }, 100);
    });

    microQ(_done => {
      setTimeout(() => {
        clock[clock.length] = 'two';
        _done();
      }, 50);
    });

    microQ(_done => {
      clock[clock.length] = 'three';
      _done();
    });

    microQ(() => {
      expect(clock).toEqual(['one', 'two', 'three']);
      done();
    });
  });
});
