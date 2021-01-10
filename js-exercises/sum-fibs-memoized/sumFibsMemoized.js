function sumFibs(num) {
  if (typeof (num) !== 'number' || num <= 0) {
    return 0;
  }
  let num1 = 0;
  let num2 = 1;
  let num3 = num1 + num2;
  const fibNum = [];

  while (num3 <= num) {
    fibNum.push(num3);
    num1 = num2;
    num2 = num3;
    num3 = num1 + num2;
  }
  return fibNum.filter(n => n % 2).reduce((a, b) => a + b);
}

function cacheFunction(func) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    const result = func(n);
    cache[n] = result;
    return result;
  };
}
export { sumFibs, cacheFunction };
