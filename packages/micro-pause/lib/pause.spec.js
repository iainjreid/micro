'use strict';

const Pause = require('..');

describe('Pause:', () => {
  it('should pause execution for 250ms', async () => {
    const startTime = Date.now();
    await Pause(250);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).toBeLessThan(300);
    expect(timeTaken).toBeGreaterThan(200);
  });

  it('should pause execution for 500ms', async () => {
    const startTime = Date.now();
    await Pause(500);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).toBeLessThan(550);
    expect(timeTaken).toBeGreaterThan(450);
  });

  it('should pause execution for 1000ms', async () => {
    const startTime = Date.now();
    await Pause(1000);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).toBeLessThan(1050);
    expect(timeTaken).toBeGreaterThan(950);
  });
});
