'use strict';

const Filter = require('..');

const src = [{
  foo: 'yes',
  bar: 'foo',
}, {
  foo: 'yes',
  bar: 'bar',
}, {
  foo: 'no',
  bar: 'baz',
}];

describe('Filter:', () => {
  it('return a new array with modified values', () => {
    expect(Filter(({ foo }) => foo === 'yes', src)).toEqual([{
      foo: 'yes',
      bar: 'foo',
    }, {
      foo: 'yes',
      bar: 'bar',
    }]);
  });
});
