import base from "@emphori/micro-base"

function reduce<T, Result>(fn: (acc: Result, elem: T) => Result, initial: Result, arr: readonly T[]): Result {
  let result = initial

  for (const elem of arr) {
    result = fn(result, elem)
  }

  return result
}

export default base(reduce)
