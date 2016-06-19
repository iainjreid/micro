/* vim: set et ts=2 cc=120: */

'use strict';

/** Queue:
 *
 * This Array is simply responsible for the storage of the tasks. As tasks are added to the queue, they will be
 * retrieved by the executor in the order in which they were given, and removed from the queue upon completion.
 */
const q = [];

/** Executor:
 *
 * The executor is a short, self executing function that will continue to self execute as long as there are tasks left
 * in the queue.
 */
const r = () => {
  // Retrieve the first task in the queue
  q.shift()(() => {
    if (q.length) {
      r();
    }
  });
}

module.exports = fn => {
  // Added the task to the queue
  q[q.length] = fn;

  // If this is the only item in the queue, begin processing
  if (q.length === 1) {
    r();
  }
}
