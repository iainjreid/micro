'use strict';

const clamp = require('..');

describe('clamp:', () => {
  it('returns the correctly clamped number', () => {
    expect(clamp(23, 80, 100)).toEqual(80);
  });
});
