var sd = require('string_decoder').StringDecoder;
var d = new sd('utf8');
var b = Buffer.alloc(5);

console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer
