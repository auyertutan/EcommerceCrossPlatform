export default function sortByKey(list, key) {
  const sortList = (list || []).sort((a, b) => a[key] - b[key])

  return sortList;
};