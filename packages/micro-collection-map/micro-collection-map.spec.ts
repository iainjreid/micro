import map from "./micro-collection-map"

const src = [{
  foo: 'bar',
  bar: 'baz',
}];

describe('map:', () => {
  it('return a new array with modified values', () => {
    expect(map(({ foo, bar }: any) => ({
      foo: bar,
      bar: foo,
    }), src)).toEqual([{
      foo: 'baz',
      bar: 'bar',
    }]);
  });
});
