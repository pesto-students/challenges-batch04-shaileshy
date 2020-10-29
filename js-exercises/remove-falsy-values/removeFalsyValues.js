function removeFalsyValues(array) {
  const newArray = [];
  array.forEach(element => {
    if (element) {
      newArray.push(element);
    }
  });
  return newArray;
}

export {
  removeFalsyValues,
};
