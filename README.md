# Micro Queue

[![Greenkeeper badge](https://badges.greenkeeper.io/iainreid820/micro-queue.svg)](https://greenkeeper.io/)
A micro library built to process tasks synchronously

[![npm](https://img.shields.io/npm/v/micro-queue.svg?style=flat-square)](https://www.npmjs.com/package/micro-queue)
![travis](https://img.shields.io/travis/iainreid820/micro-queue/master.svg?style=flat-square)

### Module description
This module aims to provide a basic, minimalist approach to synchronous queue management. Simply invoke the module directly with a function as it's first and only argument, and that function will be called as soon as possible (with respect to any functions that may already be waiting in the queue).

### Example usage
Below is a very simple example on how best to use this module. For appearances sake, and to be in keeping with the philosophy of this module, the constant `q` is choosen, however, if a more expressive or verbose approach is favourable use `microQ` instead.

```javascript
  const q = require('micro-queue');

  // Add a function to the queue, like so
  q((done) => {
    // ... do something snazzy

    // Then simply call the "done" method upon completion
    done();
  });
```
