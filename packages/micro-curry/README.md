# Micro Curry
A micro library built solely to curry functions

[![npm](https://img.shields.io/npm/v/micro-curry.svg?style=flat-square)](https://www.npmjs.com/package/micro-curry)

### Module description

This module allows developers to quickly curry any given function, with as little overhead as possible, whilst providing maximum usability. Curried functions will be recursively curried until their required number of arguments are met. 

### Example usage

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

### Micro collection

I've written a few of these micro libraries, check them out!

- [micro-catch](https://github.com/iainreid820/micro-catch)
- [micro-queue](https://github.com/iainreid820/micro-queue)

