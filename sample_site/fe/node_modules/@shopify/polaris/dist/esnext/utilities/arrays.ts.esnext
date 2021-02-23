function arraysAreEqual(firstArray, secondArray, comparator) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  return firstArray.every((firstItem, index) => {
    const secondItem = secondArray[index];

    if (comparator != null) {
      return comparator(firstItem, secondItem);
    }

    return firstItem === secondItem;
  });
}

export { arraysAreEqual };
