export default function deleteFromList(list, key, deletedItem) {
  const newList = list.filter((item) => item[key] !== deletedItem)

  return newList;
};