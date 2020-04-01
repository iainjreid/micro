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

### Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| concat               |        |            |
| copyWithin           |        |            |
| entries              |        |            |
| every                |        |            |
| fill                 |        |            |
| filter               |        |            |
| find                 |        |            |
| findIndex            |        |            |
| flat                 |        |            |
| flatMap              |        |            |
| forEach              |        |            |
| includes             |        |            |
| indexOf              |        |            |
| join                 |        |            |
| keys                 |        |            |
| lastIndexOf          |        |            |
| map                  |        |            |
| pop                  |        |            |
| push                 |        |            |
| reduce               |        |            |
| reduceRight          |        |            |
| reverse              |        |            |
| shift                |        |            |
| slice                |        |            |
| some                 |        |            |
| sort                 |        |            |
| splice               |        |            |
| toLocaleString       |        |            |
| toString             |        |            |
| unshift              |        |            |
| values               |        |            |

### ArrayBuffer

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| slice                |        |            |

### BigInt

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toLocaleString       |        |            |
| toString             |        |            |
| valueOf              |        |            |

### BigInt64Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### BigUint64Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Boolean

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |
| valueOf              |        |            |

### Buffer

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| asciiSlice           |        |            |
| asciiWrite           |        |            |
| base64Slice          |        |            |
| base64Write          |        |            |
| compare              |        |            |
| copy                 |        |            |
| equals               |        |            |
| fill                 |        |            |
| hexSlice             |        |            |
| hexWrite             |        |            |
| includes             |        |            |
| indexOf              |        |            |
| inspect              |        |            |
| lastIndexOf          |        |            |
| latin1Slice          |        |            |
| latin1Write          |        |            |
| readBigInt64BE       |        |            |
| readBigInt64LE       |        |            |
| readBigUInt64BE      |        |            |
| readBigUInt64LE      |        |            |
| readDoubleBE         |        |            |
| readDoubleLE         |        |            |
| readFloatBE          |        |            |
| readFloatLE          |        |            |
| readInt16BE          |        |            |
| readInt16LE          |        |            |
| readInt32BE          |        |            |
| readInt32LE          |        |            |
| readInt8             |        |            |
| readIntBE            |        |            |
| readIntLE            |        |            |
| readUInt16BE         |        |            |
| readUInt16LE         |        |            |
| readUInt32BE         |        |            |
| readUInt32LE         |        |            |
| readUInt8            |        |            |
| readUIntBE           |        |            |
| readUIntLE           |        |            |
| slice                |        |            |
| swap16               |        |            |
| swap32               |        |            |
| swap64               |        |            |
| toJSON               |        |            |
| toLocaleString       |        |            |
| toString             |        |            |
| ucs2Slice            |        |            |
| ucs2Write            |        |            |
| utf8Slice            |        |            |
| utf8Write            |        |            |
| write                |        |            |
| writeBigInt64BE      |        |            |
| writeBigInt64LE      |        |            |
| writeBigUInt64BE     |        |            |
| writeBigUInt64LE     |        |            |
| writeDoubleBE        |        |            |
| writeDoubleLE        |        |            |
| writeFloatBE         |        |            |
| writeFloatLE         |        |            |
| writeInt16BE         |        |            |
| writeInt16LE         |        |            |
| writeInt32BE         |        |            |
| writeInt32LE         |        |            |
| writeInt8            |        |            |
| writeIntBE           |        |            |
| writeIntLE           |        |            |
| writeUInt16BE        |        |            |
| writeUInt16LE        |        |            |
| writeUInt32BE        |        |            |
| writeUInt32LE        |        |            |
| writeUInt8           |        |            |
| writeUIntBE          |        |            |
| writeUIntLE          |        |            |

### DataView

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| getBigInt64          |        |            |
| getBigUint64         |        |            |
| getFloat32           |        |            |
| getFloat64           |        |            |
| getInt16             |        |            |
| getInt32             |        |            |
| getInt8              |        |            |
| getUint16            |        |            |
| getUint32            |        |            |
| getUint8             |        |            |
| setBigInt64          |        |            |
| setBigUint64         |        |            |
| setFloat32           |        |            |
| setFloat64           |        |            |
| setInt16             |        |            |
| setInt32             |        |            |
| setInt8              |        |            |
| setUint16            |        |            |
| setUint32            |        |            |
| setUint8             |        |            |

### Date

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| getDate              |        |            |
| getDay               |        |            |
| getFullYear          |        |            |
| getHours             |        |            |
| getMilliseconds      |        |            |
| getMinutes           |        |            |
| getMonth             |        |            |
| getSeconds           |        |            |
| getTime              |        |            |
| getTimezoneOffset    |        |            |
| getUTCDate           |        |            |
| getUTCDay            |        |            |
| getUTCFullYear       |        |            |
| getUTCHours          |        |            |
| getUTCMilliseconds   |        |            |
| getUTCMinutes        |        |            |
| getUTCMonth          |        |            |
| getUTCSeconds        |        |            |
| getYear              |        |            |
| setDate              |        |            |
| setFullYear          |        |            |
| setHours             |        |            |
| setMilliseconds      |        |            |
| setMinutes           |        |            |
| setMonth             |        |            |
| setSeconds           |        |            |
| setTime              |        |            |
| setUTCDate           |        |            |
| setUTCFullYear       |        |            |
| setUTCHours          |        |            |
| setUTCMilliseconds   |        |            |
| setUTCMinutes        |        |            |
| setUTCMonth          |        |            |
| setUTCSeconds        |        |            |
| setYear              |        |            |
| toDateString         |        |            |
| toGMTString          |        |            |
| toISOString          |        |            |
| toJSON               |        |            |
| toLocaleDateString   |        |            |
| toLocaleString       |        |            |
| toLocaleTimeString   |        |            |
| toString             |        |            |
| toTimeString         |        |            |
| toUTCString          |        |            |
| valueOf              |        |            |

### Error

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |

### EvalError

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |

### Float32Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Float64Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Function

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| apply                |        |            |
| bind                 |        |            |
| call                 |        |            |
| toString             |        |            |

### Int16Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Int32Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Int8Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Map

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| clear                |        |            |
| delete               |        |            |
| entries              |        |            |
| forEach              |        |            |
| get                  |        |            |
| has                  |        |            |
| keys                 |        |            |
| set                  |        |            |
| values               |        |            |

### Number

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toExponential        |        |            |
| toFixed              |        |            |
| toLocaleString       |        |            |
| toPrecision          |        |            |
| toString             |        |            |
| valueOf              |        |            |

### Object

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| __defineGetter__     |        |            |
| __defineSetter__     |        |            |
| __lookupGetter__     |        |            |
| __lookupSetter__     |        |            |
| hasOwnProperty       |        |            |
| isPrototypeOf        |        |            |
| propertyIsEnumerable |        |            |
| toLocaleString       |        |            |
| toString             |        |            |
| valueOf              |        |            |

### Promise

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| catch                |        |            |
| finally              |        |            |
| then                 |        |            |

### RangeError

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |

### ReferenceError

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |

### RegExp

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| compile              |        |            |
| exec                 |        |            |
| test                 |        |            |
| toString             |        |            |

### Set

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| add                  |        |            |
| clear                |        |            |
| delete               |        |            |
| entries              |        |            |
| forEach              |        |            |
| has                  |        |            |
| keys                 |        |            |
| values               |        |            |

### SharedArrayBuffer

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| slice                |        |            |

### String

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| anchor               |        |            |
| big                  |        |            |
| blink                |        |            |
| bold                 |        |            |
| charAt               |        |            |
| charCodeAt           |        |            |
| codePointAt          |        |            |
| concat               |        |            |
| endsWith             |        |            |
| fixed                |        |            |
| fontcolor            |        |            |
| fontsize             |        |            |
| includes             |        |            |
| indexOf              |        |            |
| italics              |        |            |
| lastIndexOf          |        |            |
| link                 |        |            |
| localeCompare        |        |            |
| match                |        |            |
| matchAll             |        |            |
| normalize            |        |            |
| padEnd               |        |            |
| padStart             |        |            |
| repeat               |        |            |
| replace              |        |            |
| search               |        |            |
| slice                |        |            |
| small                |        |            |
| split                |        |            |
| startsWith           |        |            |
| strike               |        |            |
| sub                  |        |            |
| substr               |        |            |
| substring            |        |            |
| sup                  |        |            |
| toLocaleLowerCase    |        |            |
| toLocaleUpperCase    |        |            |
| toLowerCase          |        |            |
| toString             |        |            |
| toUpperCase          |        |            |
| trim                 |        |            |
| trimEnd              |        |            |
| trimLeft             |        |            |
| trimRight            |        |            |
| trimStart            |        |            |
| valueOf              |        |            |

### Symbol

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |
| valueOf              |        |            |

### SyntaxError

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |

### TextDecoder

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| decode               |        |            |

### TextEncoder

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| encode               |        |            |
| encodeInto           |        |            |

### TypeError

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |

### URIError

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toString             |        |            |

### URL

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| toJSON               |        |            |
| toString             |        |            |

### URLSearchParams

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| append               |        |            |
| delete               |        |            |
| entries              |        |            |
| forEach              |        |            |
| get                  |        |            |
| getAll               |        |            |
| has                  |        |            |
| keys                 |        |            |
| set                  |        |            |
| sort                 |        |            |
| toString             |        |            |
| values               |        |            |

### Uint16Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Uint32Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Uint8Array

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### Uint8ClampedArray

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |

### WeakMap

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| delete               |        |            |
| get                  |        |            |
| has                  |        |            |
| set                  |        |            |

### WeakSet

| Method name          | Tested | Documented |
| ---                  | ---    | ---        |
| add                  |        |            |
| delete               |        |            |
| has                  |        |            |

## License

This project is released under the [MIT License](./LICENSE). Enjoy responsibly ✌️
