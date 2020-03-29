'use strict';

import base from "./micro-base"

describe('Helpers', () => {
  const fn = base((a: number, b: number, c: number, d: number) => {
    return [a, b, c, d]
  });

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
