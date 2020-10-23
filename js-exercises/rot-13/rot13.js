function rot13(str) {
  if (!/^[A-Z .?!*_-\s]+$/.test(str)) {
    return null;
  }
  const az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nm = 'NOPQRSTUVWXYZABCDEFGHIJKLMN';
  const index = x => az.indexOf(x);
  const decodedStr = str.split(' ').map(char => char.split('').map(letter => (index(letter) !== -1 ? nm[index(letter)] : letter)).join('')).join(' ');
  return decodedStr;
}

export {
  rot13,
};
