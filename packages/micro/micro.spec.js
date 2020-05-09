'use strict'

const M = require('./micro')

/**
 *
 * Array
 *
 */

describe('array-concat', () => {
  it('merges two arrays', () => {
    expect(M.Array.concat([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('array-copyWithin', () => {
  it('copies an array chunk to a given index', () => {
    expect(M.Array.copyWithin(0, 1, 3, [1, 2, 3])).toEqual([2, 3, 3])
  })
})

describe('array-entries', () => {
  it('creates an iterator from an array', () => {
    expect(typeof M.Array.entries([1, 2, 3])[Symbol.iterator]).toEqual('function')
  })
})

describe('array-every', () => {
  it('check that all elements in an array pass a given condition', () => {
    expect(M.Array.every((elem) => elem > 0, [1, 2, 3])).toEqual(true)
  })
})

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

describe('array-some', () => {
  it('check that no elements in an array pass a given condition', () => {
    expect(M.Array.some((elem) => elem > 2, [1, 2, 3])).toEqual(true)
  })
})

/**
 *
 * Map
 *
 */
describe('map-clear', () => {
  it('removes all of the elements from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(map.size).toEqual(2)
    M.Map.clear(map)
    expect(map.size).toEqual(0)
  })
})

describe('map-delete', () => {
  it('removes the element from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual('2')
    M.Map.delete('foo', map)
    expect(map.get('foo')).toEqual(undefined)
    expect(map.get('bar')).toEqual('2')
  })
  
  it('returns true if the key exists and removes it from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual('2')
    expect(M.Map.delete('bar', map)).toEqual(true)
    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual(undefined)
  })

  it('returns false if the key doesn\'t exist in the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual('2')
    expect(M.Map.delete('baz', map)).toEqual(false)
    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual('2')
  })
})

describe('map-entries', () => {
  it('returns an iterator object built from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(Array.from(M.Map.entries(map))).toStrictEqual([
      ['foo', '1'],
      ['bar', '2']
    ])
  })
})

describe('map-forEach', () => {
  it('calls the callback function for each key/value in the provided Map', () => {
    const fn = jest.fn()
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    M.Map.forEach(fn, map)
    expect(fn).toBeCalledTimes(2)
    expect(fn).toHaveBeenNthCalledWith(1, '1', 'foo', map)
    expect(fn).toHaveBeenNthCalledWith(2, '2', 'bar', map)
  })
})

describe('map-get', () => {
  it('gets a value from the provided Map', () => {
    const map = new Map()

    expect(M.Map.get('foo', map)).toEqual(undefined)
    map.set('foo', 'bar')
    expect(M.Map.get('foo', map)).toEqual('bar')
  })
})

describe('map-has', () => {
  const map = new Map()
  map.set('foo', '1')

  it('returns true if the key exists in the provided Map', () => {
    expect(M.Map.has('foo', map)).toBe(true)
  })
  
  it('returns false if the key does not exist in the provided Map', () => {
    expect(M.Map.has('bar', map)).toBe(false)
  })
})

describe('map-keys', () => {
  it('returns an iterator object containing the keys from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(Array.from(M.Map.keys(map))).toStrictEqual([
      'foo',
      'bar'
    ])
  })
})

describe('map-set', () => {
  it('sets a value in the provided Map', () => {
    const map = new Map()

    expect(map.get('foo')).toEqual(undefined)
    M.Map.set('foo', 'bar', map)
    expect(map.get('foo')).toEqual('bar')
  })
})

describe('map-values', () => {
  it('returns an iterator object containing the values from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(Array.from(M.Map.values(map))).toStrictEqual([
      '1',
      '2'
    ])
  })
})

