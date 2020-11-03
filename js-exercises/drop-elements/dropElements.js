function dropElements(elements, predicate) {
  if (!Array.isArray(elements)) {
    throw new Error(`Function 'dropElements' first argument to be Array but got ${elements}`);
  }
  if (typeof predicate !== 'function') {
    throw new Error(`Function 'dropElements' second argument to be Function but got ${typeof predicate}`);
  }
  const elementsAfterDropping = elements.filter(predicate);
  return elementsAfterDropping;
}
export { dropElements };
