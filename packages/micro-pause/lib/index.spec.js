'use strict';

// Dependencies
const expect = require('chai').expect;
const mPause = require('../');

describe('mPause:', () => {
  it('should pause execution for 250ms', async () => {
    const startTime = Date.now();
    await mPause(250);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).to.be.below(300);
    expect(timeTaken).to.be.above(200);
  });

  it('should pause execution for 500ms', async () => {
    const startTime = Date.now();
    await mPause(500);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).to.be.below(550);
    expect(timeTaken).to.be.above(450);
  });

  it('should pause execution for 1000ms', async () => {
    const startTime = Date.now();
    await mPause(1000);
    const timeTaken = Date.now() - startTime;
    expect(timeTaken).to.be.below(1050);
    expect(timeTaken).to.be.above(950);
  });
});
