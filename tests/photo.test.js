const assert = require('node:assert/strict');
const photo = require('../dist/photo.js');
assert.deepEqual(photo.cropSquare(800,400),{x:200,y:0,size:400});
assert.deepEqual(photo.cropSquare(400,800),{x:0,y:200,size:400});
assert.equal(photo.validPhoto('data:image/jpeg;base64,/9j/2Q=='),true);
assert.equal(photo.validPhoto('https://example.com/photo.jpg'),false);
assert.equal(photo.validPhoto('data:text/html;base64,PGgxPg=='),false);
console.log('Photo data and crop tests passed');
