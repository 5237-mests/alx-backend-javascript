export default function hasValuesFromArray(set, array) {
  let hold;
  for (const x of array) {
    if (!set.has(x)) {
      hold = false;
      break;
    } else {
      hold = true;
    }
  }
  return hold;
}
