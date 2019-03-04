# Micro Catch

A micro library built to quietly handle errors in function compositions

[![npm](https://img.shields.io/npm/v/micro-catch.svg?style=flat-square)](https://www.npmjs.com/package/micro-catch)
![travis](https://img.shields.io/travis/iainreid820/micro-catch/master.svg?style=flat-square)

### Module description

Clunky try catch statements can spoil functional code and often lead to generalised error handling over large compositions. This module aims to solve this issue, and hopefully improve the general readability of your code, and the quality of the error handling during runtime.

### Example usage

Here's a short example of how to guard your process from a function that may throw an error. Rather than throw the error, potentially exiting your application, the library will silence the error and log a short message to the console.

```javascript
  const mCatch = require('micro-catch')

  // A slightly rusty function
  function mightThrow(arg) {
    if (arg !== "exactlyThis!") {
	  throw Error("Bad argument");
	}
  }

  // Guard the poorly written function above
  const wontThrow = mCatch(mightThrow);

  // Call the safely wrapped function
  wontThrow("maybeThis?") // Handled error: "Bad argument"
```

### Micro collection

I've written a few of these micro libraries, check them out!

- [micro-curry](https://github.com/iainreid820/micro-curry)
- [micro-queue](https://github.com/iainreid820/micro-queue)

