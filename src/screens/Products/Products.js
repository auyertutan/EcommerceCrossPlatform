import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProductContext } from "../../context/Product";
import fetchData from "../../functions/Fetch";
import sortByKey from "../../functions/SortByKey";

function Products({ navigation }) {
  const [products, setProducts] = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    let response = await fetchData('https://northwind.vercel.app/api/products', "GET");
    const productList = sortByKey(response, 'id');

    setProducts(productList);
  };

  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A2430",
  },
});

export default Products;
