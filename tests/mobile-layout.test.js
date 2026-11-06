const assert = require('node:assert/strict');
const { fitGridWidth, photoTextSize } = require('../minitool/layout.js');
assert.equal(fitGridWidth(357, 780, 220, 105, 20),357);
assert.equal(fitGridWidth(357, 600, 220, 105, 20),255);
assert.ok(photoTextSize(75, 9) < photoTextSize(110, 9));
assert.ok(photoTextSize(100, 40) < photoTextSize(100, 9));
assert.ok(photoTextSize(75, 9) <= 11);
console.log('Mobile layout sizing passed');
