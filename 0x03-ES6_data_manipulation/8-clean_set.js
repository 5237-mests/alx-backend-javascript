export default function cleanSet(set, startString) {
  const newarr = [];

  if (!startString || typeof startString !== 'string') return '';

  set.forEach((el) => {
    if (el.startsWith(startString)) newarr.push(el.slice(startString.length));
  });

  return newarr.join('-');
}
