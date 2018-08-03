'use strict';

/**
 * This Array is simply responsible for the storage of the tasks. As tasks are added to the queue, they will be
 * retrieved by the executor in the order in which they were given, and removed from the queue upon completion.
 */
const q = [];

/**
 * To improve the memory footprint of this micro-module, this entry point is abstracted to avoid the creation of an
 * unnecssary closure within in the task runner.
 */
const e = () => {
  // Register that the queue is being processed
  e._r = true;

  // Execute the task runner
  return r();
};

/**
 * The runner is a short, self executing function that will continue to self execute as long as there are tasks left
 * in the queue.
 */
const r = () => {
  // Retrieve the first task in the queue
  return q.shift()(() => {
    if (q.length) {
      return r();
    } else {
      // Register that the queue is no longer being processed
      e._r = false;
    }
  });
}

module.exports = fn => {
  // Added the task to the queue
  q[q.length] = fn;

  // If this is the only item in the queue, begin processing
  if (!e._r) {
    return e();
  }
}
