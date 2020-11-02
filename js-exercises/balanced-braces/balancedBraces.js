function balancedBraces(str) {
  if (typeof (str) !== 'string') {
    throw new Error(`Function 'balancedBraces' argument string expected, got ${typeof str}.`);
  }
  const listStartBraces = ['{', '(', '['];
  const listEndBraces = ['}', ')', ']'];
  const stackOfBraces = [];

  for (const char of str) {
    if (listStartBraces.includes(char)) {
      stackOfBraces.push(char);
    }
    if (listEndBraces.includes(char)) {
      const getIndexOfChar = listEndBraces.indexOf(char);
      const poppedChar = stackOfBraces.pop();
      const getIndexOfPoppedChar = listStartBraces.indexOf(poppedChar);
      if (getIndexOfChar !== getIndexOfPoppedChar) {
        return false;
      }
    }
  }
  if (stackOfBraces.length === 0) {
    return true;
  }
  return false;
}
export {
  balancedBraces,
};
