'use strict';

const Queue = require('./queue');

describe('order:', () => {
  it('should execute functions in the order that they are supplied', done => {
    const clock = [];

    Queue(_done => {
      setTimeout(() => {
        clock[clock.length] = 'one';
        _done();
      }, 100);
    });

    Queue(_done => {
      setTimeout(() => {
        clock[clock.length] = 'two';
        _done();
      }, 50);
    });

    Queue(_done => {
      clock[clock.length] = 'three';
      _done();
    });

    Queue(() => {
      expect(clock).toEqual(['one', 'two', 'three']);
      done();
    });
  });
});
