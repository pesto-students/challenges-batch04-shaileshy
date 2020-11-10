function debounce(fn, timeInMs) {
  if (typeof (fn) !== 'function') {
    throw new Error(`Function 'debounce' expected first argument function but received ${typeof (fn)}.`);
  }
  if (typeof (timeInMs) !== 'number') {
    throw new Error(`Function 'debounce' expected second argument timer should be in milliseconds, but received ${timeInMs}.`);
  }
  let timer;
  const resetTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, timeInMs);
  };
  return () => {
    resetTimer();
  };
}

export { debounce };
