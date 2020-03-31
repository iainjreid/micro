'use strict'

const M = require('./micro')

describe('array-filter', () => {
  it('removes non-truthy elements from an array', () => {
    expect(M.Array.filter((elem) => elem, [1, 0, 0, 1, 1])).toEqual([1, 1, 1])
  })
})

describe('array-map', () => {
  it('correctly maps a function over an array', () => {
    expect(M.Array.map((elem, i) => elem + i, [1, 2, 3])).toEqual([1, 3, 5])
  })

  it('correctly maps a function over an array (when curried)', () => {
    expect(M.Array.map((elem, i) => elem + i)([1, 2, 3])).toEqual([1, 3, 5])
  })
})

describe('array-reduce', () => {
  it('correctly reduces an array', () => {
    expect(M.Array.reduce((acc, elem) => acc + elem, 0, [1, 2, 3])).toEqual(6)
  })
})

