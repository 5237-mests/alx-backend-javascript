export default function updateUniqueItems(groceriesList) {
  if (groceriesList instanceof Map) {
    groceriesList.forEach((value, key, groceriesList) => {
      if (value === 1) groceriesList.set(key, 100);
    });
  } else {
    throw new Error('Cannot process');
  }

  return groceriesList;
}
