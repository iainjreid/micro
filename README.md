<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/emphori/micro@master/.github/logo-141x122@2x.png" width="141px" />
</p>

<p align="center">
  <a href="https://travis-ci.org/Emphori/micro">
    <img src="https://img.shields.io/travis/Emphori/micro/master.svg?style=flat-square" />
  </a>
  <a href="https://codecov.io/gh/Emphori/micro">
    <img src="https://img.shields.io/codecov/c/github/Emphori/micro/master.svg?style=flat-square" />
  </a>
  <a href="https://lgtm.com/projects/g/Emphori/micro">
    <img src="https://img.shields.io/lgtm/grade/javascript/github/Emphori/micro.svg?style=flat-square">
  </a>
</p>

This library is currently under active development, so please avoid using any
of the exposed methods in projects that depend on any degree of upstream
stability!

## Description

This is a unique approach to the standard utility library, leveraging modern
meta-programming techniques now widely available in most JavaScript runtimes,
Micro brings to the table a huge reduction in the bundle size for any project
currently using Lodash, Ramda, or Underscore.

As well as the above, this project plays host to a collection of individually
packaged helpers, functional blocks, and generally useful knick-knacks that
often get repeated between projects.

## Comparison with other libraries


## Library coverage

In theory, Micro covers every instance method exposed by JavaScript's standard
built-in objects. Below is a short excerpt from the official documentation
outlining the current testing and documentation efforts.

### Array

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `concat`            | Merge two arrays                                                        | :white_check_mark: |            |
| `copyWithin`        | Shallow copy part of an array to another location in that array         | :white_check_mark: |            |
| `entries`           | Retrieve an iterator from an array                                      | :white_check_mark: |            |
| `every`             | Tests whether all of the elements match the given condition             | :white_check_mark: |            |
| `fill`              |                                                                         |                    |            |
| `filter`            | Create a new array with all of the elements that pass a given condition | :white_check_mark: |            |
| `find`              |                                                                         |                    |            |
| `findIndex`         |                                                                         |                    |            |
| `flat`              |                                                                         |                    |            |
| `flatMap`           |                                                                         |                    |            |
| `forEach`           |                                                                         |                    |            |
| `includes`          |                                                                         |                    |            |
| `indexOf`           |                                                                         |                    |            |
| `join`              |                                                                         |                    |            |
| `keys`              |                                                                         |                    |            |
| `lastIndexOf`       |                                                                         |                    |            |
| `map`               | Apply a function over each element in an array                          | :white_check_mark: |            |
| `pop`               |                                                                         |                    |            |
| `push`              |                                                                         |                    |            |
| `reduce`            | Reduce an array to a single output value                                | :white_check_mark: |            |
| `reduceRight`       |                                                                         |                    |            |
| `reverse`           |                                                                         |                    |            |
| `shift`             |                                                                         |                    |            |
| `slice`             |                                                                         |                    |            |
| `some`              | Tests that none of the element match the given condition                | :white_check_mark: |            |
| `sort`              |                                                                         |                    |            |
| `splice`            |                                                                         |                    |            |
| `toLocaleString`    |                                                                         |                    |            |
| `toString`          |                                                                         |                    |            |
| `unshift`           |                                                                         |                    |            |
| `values`            |                                                                         |                    |            |

### Map

| Method    | Summary                                                                                                               | Tested             | Documented |
| ---       | ---                                                                                                                   | :---:              | :---:      |
| `clear`   | Removes all of the elements from a Map object                                                                         | :white_check_mark: |            |
| `delete`  | Removes a specified element from a Map object, returning true if the element existed and false if the element did not | :white_check_mark: |            |
| `entries` | Creates a new Iterator containing an array of `[key, value]` for each element a Map object                            | :white_check_mark: |            |
| `forEach` | Calls the given callback function once for every key value pair in a Map object                                       | :white_check_mark: |            |
| `get`     | Return a specified element from a Map object                                                                          | :white_check_mark: |            |
| `has`     |                                                                                                                       |                    |            |
| `keys`    |                                                                                                                       |                    |            |
| `set`     | Assign or update a specified element in a Map object                                                                  | :white_check_mark: |            |
| `values`  |                                                                                                                       |                    |            |

### Number

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `toExponential`     |                                                                         |                    |            |
| `toFixed`           |                                                                         |                    |            |
| `toLocaleString`    |                                                                         |                    |            |
| `toPrecision`       |                                                                         |                    |            |
| `toString`          |                                                                         |                    |            |
| `valueOf`           |                                                                         |                    |            |

### Promise

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `catch`             |                                                                         |                    |            |
| `finally`           |                                                                         |                    |            |
| `then`              |                                                                         |                    |            |

### Set

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `add`               |                                                                         |                    |            |
| `clear`             |                                                                         |                    |            |
| `delete`            |                                                                         |                    |            |
| `entries`           |                                                                         |                    |            |
| `forEach`           |                                                                         |                    |            |
| `has`               |                                                                         |                    |            |
| `keys`              |                                                                         |                    |            |
| `values`            |                                                                         |                    |            |

### String

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `charAt`            |                                                                         |                    |            |
| `charCodeAt`        |                                                                         |                    |            |
| `codePointAt`       |                                                                         |                    |            |
| `concat`            |                                                                         |                    |            |
| `endsWith`          |                                                                         |                    |            |
| `includes`          |                                                                         |                    |            |
| `indexOf`           |                                                                         |                    |            |
| `lastIndexOf`       |                                                                         |                    |            |
| `localeCompare`     |                                                                         |                    |            |
| `match`             |                                                                         |                    |            |
| `matchAll`          |                                                                         |                    |            |
| `normalize`         |                                                                         |                    |            |
| `padEnd`            |                                                                         |                    |            |
| `padStart`          |                                                                         |                    |            |
| `repeat`            |                                                                         |                    |            |
| `replace`           |                                                                         |                    |            |
| `search`            |                                                                         |                    |            |
| `slice`             |                                                                         |                    |            |
| `split`             |                                                                         |                    |            |
| `startsWith`        |                                                                         |                    |            |
| `substring`         |                                                                         |                    |            |
| `toLocaleLowerCase` |                                                                         |                    |            |
| `toLocaleUpperCase` |                                                                         |                    |            |
| `toLowerCase`       |                                                                         |                    |            |
| `toString`          |                                                                         |                    |            |
| `toUpperCase`       |                                                                         |                    |            |
| `trim`              |                                                                         |                    |            |
| `trimEnd`           |                                                                         |                    |            |
| `trimLeft`          |                                                                         |                    |            |
| `trimRight`         |                                                                         |                    |            |
| `trimStart`         |                                                                         |                    |            |
| `valueOf`           |                                                                         |                    |            |

### WeakMap

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `delete`            |                                                                         |                    |            |
| `get`               |                                                                         |                    |            |
| `has`               |                                                                         |                    |            |
| `set`               |                                                                         |                    |            |

### WeakSet

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `add`               |                                                                         |                    |            |
| `delete`            |                                                                         |                    |            |
| `has`               |                                                                         |                    |            |

## License

This project is released under the [MIT License](./LICENSE). Enjoy responsibly ✌️
