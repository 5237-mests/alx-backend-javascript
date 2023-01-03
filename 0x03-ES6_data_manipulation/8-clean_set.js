export default function cleanSet(set, startString) {
  const newarr = [];

  if (startString.length === 0) return ' ';

  set.forEach((el) => {
    if (el.startsWith(startString)) newarr.push(el.slice(startString.length));
  });

  return newarr.join('-');
}
