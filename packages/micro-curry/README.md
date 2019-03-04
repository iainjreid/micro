# Micro Curry

A micro library built solely to curry functions

[![npm](https://img.shields.io/npm/v/@chaff/micro-curry.svg?style=flat-square)](https://www.npmjs.com/package/@chaff/micro-curry)

## Module description

This module allows developers to quickly curry any given function, with as little overhead as possible, whilst providing maximum usability. Curried functions will be recursively curried until their required number of arguments are met. 

## Example usage

The following snippet is a simple example showing how this library will work on your existing methods.

```javascript
  const mCurry = require('micro-curry');

  // Your fancy function
  function helloToYou(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
  }

  // Curry the function you've already defined
  const cHelloToYou = mCurry(helloToYou);

  // Call the curried function however you choose
  console.log(cHelloToYou('Chuck')('Norris')); // "Hello, Chuck Norris!"
```

## Known caveats

For functions with an unknown arity, functions with rest parameters for example, currying is not possible without manually providing the expected number of arguments. Without this, the currying function will assume an arity of one, which might lead to hidden bugs in your code!

Part of the [Micro](https://github.com/iainreid820/micro) collection
