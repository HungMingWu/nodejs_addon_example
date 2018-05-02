const Fib = require('./lib/fib');
const ffi = require('ffi');

console.time('c++')
console.log(Fib.fib(40));
console.timeEnd('c++')

const rust = ffi.Library('./lib/libfib', {
  fib: ['int', ['int']]
});

// rust
console.time('rust');
console.log(rust.fib(40));
console.timeEnd('rust');

