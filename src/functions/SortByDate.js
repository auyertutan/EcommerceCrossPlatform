export default function sortByDate(list, key) {
  const sortList = (list || []).sort((a, b) => new Date(b[key].split(' ')[0]) - new Date(a[key].split(' ')[0]));

  return sortList;
};