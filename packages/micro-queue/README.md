# Micro Queue
A basic method to synchronously process functions

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

