var dns = require("dns");

var w3 = dns.lookup("www.google.es", function(err, address, family) {
  console.log(address);
});
