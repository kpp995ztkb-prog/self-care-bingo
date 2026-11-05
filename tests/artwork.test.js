const assert = require('node:assert/strict');
const { recommendArtwork } = require('../dist/artwork.js');
assert.equal(recommendArtwork('晚上早点睡觉')[0], 7);
assert.equal(recommendArtwork('go for a walk')[0], 20);
assert.equal(recommendArtwork('buy some flowers')[0], 0);
assert.equal(recommendArtwork('随便做一件事')[0], 12);
assert.equal(new Set(recommendArtwork('睡觉')).size, 25);
console.log('Artwork recommendations passed');
