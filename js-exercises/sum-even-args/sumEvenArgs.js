const sumEvenArgs = (...args) => {
  let sum = 0;
  args.map((val) => {
    if (val % 2 === 0) {
      sum += val;
      return val;
    }
    return val;
  });

  return sum;
};

export { sumEvenArgs };
