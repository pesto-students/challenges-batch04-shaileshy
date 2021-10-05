const limitFunctionCallCount = (fn, count) => {
  let callCount = 0;
  return (...args) => {
    if (callCount === count) {
      return null;
    }
    callCount += 1;
    return fn(...args);
  };
};
export {
  limitFunctionCallCount,
};
