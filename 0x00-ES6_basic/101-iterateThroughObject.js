export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  for (const name of reportWithIterator) {
    string += ` | ${name}`;
  }
  return string.slice(3);
}
