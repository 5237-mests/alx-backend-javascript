function getListStudentsIds(arr) {
  let newarr = [];
  if (!Array.isArray(arr)) return [];
  newarr = arr.map((el) => el.id);

  return newarr;
}

export default getListStudentsIds;
