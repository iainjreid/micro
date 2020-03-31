declare module M {
  declare namespace Array {
    /**
     * Merge two arrays.
     *
     * @param arrA - The array to be appended to the target array
     * @param arrB - The target array
     *
     * @returns A new array containing the elements from `arrA` and `arrB`
     */
    export function concat<T>(arrA: T[], arrB: T[]): T[]
  }
}

export default M
