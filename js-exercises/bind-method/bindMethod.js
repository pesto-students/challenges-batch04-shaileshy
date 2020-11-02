// You can change the `args`
// function bind(...args) {
//   return args;
// }

function bind(fn, obj) {
  if (typeof fn !== 'function') {
    throw new Error(`Function 'bind' first argument 'function' expected but got ${typeof fn}`);
  }
  if (!obj) {
    throw new Error(`Function 'bind' second argument 'object' expected but got ${typeof obj}`);
  }
  return (...args) => fn.apply(obj, args);
}

module.exports = { bind };
