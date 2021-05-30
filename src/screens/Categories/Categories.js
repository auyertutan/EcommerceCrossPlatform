import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CategoryContext } from "../../context/Category";
import fetchData from "../../functions/Fetch";
import sortByKey from "../../functions/SortByKey";

function Categories({ navigation }) {
  const [categories, setCategories] = useContext(CategoryContext);

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async () => {
    let response = await fetchData('https://northwind.vercel.app/api/categories', "GET");
    const categoryList = sortByKey(response, 'id');

    setCategories(categoryList);
  };

  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A2430",
  },
});

export default Categories;
