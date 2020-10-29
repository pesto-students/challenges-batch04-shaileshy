function diffArray(array1, array2) {
  const diff = [];
  const x = [...new Set(array1)];
  const y = [...new Set(array2)];

  x.forEach((ele) => {
    if (y.indexOf(ele) === -1) {
      return diff.push(ele);
    }
    return y.splice(y.indexOf(ele), 1);
  });
  return diff.concat(y);
}
export {
  diffArray,
};
