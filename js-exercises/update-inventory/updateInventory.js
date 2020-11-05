function sortFunction(a, b) {
  if (a[1] === b[1]) {
    return 0;
  } return (a[1] < b[1]) ? -1 : 1;
}
function updateInventory(...args) {
  const currentInventory = args[0];
  const newInventory = args[1];
  let invetary = [];
  if (currentInventory.length > 0 && newInventory.length > 0) {
    newInventory.forEach((x, i) => {
      currentInventory.forEach((y, j) => {
        if (x[1] === y[1]) {
          currentInventory[j][0] += newInventory[i][0];
          newInventory.splice(i, 1);
        }
      });
    });
  }
  invetary = [...new Set(currentInventory.concat(newInventory))].sort(sortFunction);
  return invetary;
}
export {
  updateInventory,
};
