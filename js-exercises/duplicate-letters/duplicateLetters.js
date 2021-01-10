function duplicateLetters(letter) {
  const originalStr = letter.split('');
  const lettetInStr = new Set(letter.split(''));
  let count = 0;
  let max = 0;
  lettetInStr.forEach((a) => {
    count = 0;
    originalStr.forEach((b) => {
      if (b === a) {
        count += count;
      }
    });
    if (count > max) {
      max = count;
    }
  });

  return max;
}

export {
  duplicateLetters,
};
