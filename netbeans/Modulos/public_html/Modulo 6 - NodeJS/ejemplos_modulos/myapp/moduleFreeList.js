// Some type of object I want to be able to reuse
var Vector = require("./Vector");
// The freelist itself
var FreeList = require("freelist").FreeList;

// Arguments are (freelistName, maxSize, constructorForNewObjects)
var vectorsList = new FreeList("vectors", 1000, function() {
  // quick way to use constructor with arguments object
  return Vector.apply(Object.create(Vector.prototype), arguments);
});