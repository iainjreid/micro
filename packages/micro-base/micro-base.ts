'use strict';

export default function M(fn: Function, arity = fn.length) {
  const o: any = function(this: any) {
    const args = Array.prototype.slice.call(arguments, 0, arity)

    return arguments.length >= arity
      ? fn.apply(this, args)
      : o.P.apply(this, args);
  }

  /**
   * Flip the expected order of arguments.
   */
  Object.defineProperty(o, 'F', {
    get() {
      return M((...args: any[]) => fn(...args.reverse()), arity);
    },
  });

  /**
   * Change the arity of the function.
   */
  Object.defineProperty(o, 'N', {
    value: (n: number) => {
      return M(fn, n);
    },
  });

  /**
   * Partially apply a given set of arguments.
   */
  Object.defineProperty(o, 'P', {
    value: (...argsA: any[]) => {
      return M((...argsB: any[]) => fn(...argsA, ...argsB), arity - argsA.length);
    },
  });

  return o;
};
