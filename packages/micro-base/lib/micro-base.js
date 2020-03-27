'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function M(fn, arity = fn.length) {
    const o = function () {
        const args = Array.prototype.slice.call(arguments, 0, arity);
        return arguments.length >= arity
            ? fn.apply(this, args)
            : o.P.apply(this, args);
    };
    /**
     * Flip the expected order of arguments.
     */
    Object.defineProperty(o, 'F', {
        get() {
            return M((...args) => fn(...args.reverse()), arity);
        },
    });
    /**
     * Change the arity of the function.
     */
    Object.defineProperty(o, 'N', {
        value: (n) => {
            return M(fn, n);
        },
    });
    /**
     * Partially apply a given set of arguments.
     */
    Object.defineProperty(o, 'P', {
        value: (...argsA) => {
            return M((...argsB) => fn(...argsA, ...argsB), arity - argsA.length);
        },
    });
    return o;
}
exports.default = M;
;
