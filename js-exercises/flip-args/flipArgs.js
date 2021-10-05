function flipArgs() {
  return function abc(...args) { return args.reverse(); };
}
// const s = flipArgs();
// console.log(s(1, 2, 3));

export {
  flipArgs,
};
