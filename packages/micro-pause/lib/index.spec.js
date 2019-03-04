'use strict';

const mPause = require('../');

describe('mPause:', () => {
  it('should pause execution for 250ms', async () => {
    const startTime = Date.now();
    await mPause(250);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).toBeLessThan(300);
    expect(timeTaken).toBeGreaterThan(200);
  });

  it('should pause execution for 500ms', async () => {
    const startTime = Date.now();
    await mPause(500);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).toBeLessThan(550);
    expect(timeTaken).toBeGreaterThan(450);
  });

  it('should pause execution for 1000ms', async () => {
    const startTime = Date.now();
    await mPause(1000);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).toBeLessThan(1050);
    expect(timeTaken).toBeGreaterThan(950);
  });
});
