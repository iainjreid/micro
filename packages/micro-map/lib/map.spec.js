'use strict';

const Map = require('..');

const src = [{
  foo: 'bar',
  bar: 'baz',
}];

describe('Map:', () => {
  it('return a new array with modified values', () => {
    expect(Map(({ foo, bar }) => ({
      foo: bar,
      bar: foo,
    }), src)).toEqual([{
      foo: 'baz',
      bar: 'bar',
    }]);
  });
});
