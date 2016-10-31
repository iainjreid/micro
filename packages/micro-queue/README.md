# Micro Queue
A basic method to synchronously process functions

[![npm](https://img.shields.io/npm/v/micro-queue.svg?style=flat-square)](https://www.npmjs.com/package/micro-queue)

### Usage
```javascript
  const microQ = require('micro-queue');

  // Add a function to the queue, like so
  microQ(function (done) {
    // ... do something snazzy

    // Then simply call the "done" argument upon completion
    done();
  });
```

---
Written in Vim, as God intended.

