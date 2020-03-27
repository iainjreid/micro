'use strict';

const M = require('./supports');

describe('Helpers', () => {
  const fn = M((a, b, c, d) => [a, b, c, d]);

  test('flip', () => {
    expect(fn.F(1, 2, 3, 4)).toEqual([4, 3, 2, 1]);
  });

  test('arity', () => {
    expect(fn.N(1)(1, 2)).toEqual([1, undefined, undefined, undefined])
  });

  const partialChecks = [
    [fn.P(1)(2, 3, 4), [1, 2, 3, 4]],
    [fn.P(1, 2)(3, 4), [1, 2, 3, 4]],
    [fn.P(1, 2, 3)(4), [1, 2, 3, 4]],
    [fn.P()(1, 2, 3, 4), [1, 2, 3, 4]],
    [fn.P(1, 2, 3, 4)(), [1, 2, 3, 4]],
  ]

  test.each(partialChecks)('partial (%#)', (actual, expected) => {
    expect(actual).toEqual(expected);
  });
});
