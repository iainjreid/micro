# Micro Catch

🤐 Quietly handle errors using as little code as possible

[![npm](https://img.shields.io/npm/v/@emphori/micro-catch.svg?style=flat-square)](https://www.npmjs.com/package/@emphori/micro-catch)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/@emphori/micro-catch.svg?style=flat-square)](https://bundlephobia.com/result?p=@emphori/micro-catch)

## Module description

Clunky try catch statements can spoil functional code and often lead to generalised error handling over large compositions. This module aims to solve this issue, and hopefully improve the general readability of your code, and the quality of the error handling during runtime.

## Example usage

Here's a short example of how to guard your process from a function that may throw an error. Rather than throw the error, potentially exiting your application, the library will silence the error and log a short message to the console.

```javascript
  const Catch = require('@emphori/micro-catch')

  // A slightly rusty function
  function mightThrow(arg) {
    if (arg !== "exactlyThis!") {
	    throw Error("Bad argument");
	  }
  }

  // Guard the poorly written function above
  const wontThrow = Catch(mightThrow);

  // Call the safely wrapped function
  wontThrow("maybeThis?") // Handled error: "Bad argument"
```

Part of the [Micro](https://github.com/Emphori/micro) collection
