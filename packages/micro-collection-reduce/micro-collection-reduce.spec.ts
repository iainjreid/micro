import reduce from "./micro-collection-reduce"

describe("collection-reduce", () => {
  it("should return the accumulated value for a populated array", () => {
    expect(reduce((acc: number, elem: number) => acc + elem, 0, [1, 2, 3, 4])).toEqual(10)
  })

  it("should return the initial value for an empty array", () => {
    expect(reduce(() => {}, [], [])).toEqual([])
  })
})

