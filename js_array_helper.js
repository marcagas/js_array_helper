// author: Marc Lambert Agas

// description: Simplifies some basic array methods
// version: 0.1.1

Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.first = function() {
  return this[0];
}
