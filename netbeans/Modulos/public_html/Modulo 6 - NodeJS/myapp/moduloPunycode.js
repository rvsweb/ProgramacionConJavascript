// Punycode is an encoding syntax which is used to 
// convert Unicode (UTF-8) string of characters 
// to basic ASCII string of characters

punycode = require("punycode");
console.log(punycode.decode("maana-pta"));

punycode = require("punycode");
console.log(punycode.toASCII("mañana.com"));
