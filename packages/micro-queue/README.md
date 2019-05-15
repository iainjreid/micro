# Micro Queue

⏳ A super simple synchronous queue using as little code as possible

[![npm](https://img.shields.io/npm/v/@chaff/micro-queue.svg?style=flat-square)](https://www.npmjs.com/package/@chaff/micro-queue)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/@chaff/micro-queue.svg?style=flat-square)](https://bundlephobia.com/result?p=@chaff/micro-queue)

## Module description

This module aims to provide a basic, minimalist approach to synchronous queue management. Simply invoke the module directly with a function as it's first and only argument, and that function will be called as soon as possible (with respect to any functions that may already be waiting in the queue).

## Example usage

Below is a very simple example on how best to use this module. For appearances sake, and to be in keeping with the philosophy of this module, the constant `q` is chosen, however, if a more expressive or verbose approach is favourable use `mQueue` instead.

```javascript
  const Queue = require('@chaff/micro-queue');

  // Add a function to the queue, like so
  Queue((done) => {
    // ... do something snazzy

    // Then simply call the "done" method upon completion
    done();
  });
```

Part of the [Micro](https://github.com/Chaffity/micro) collection
