import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { ProductContext } from "../../context/Product";
import fetchData from "../../functions/Fetch";
import sortByKey from "../../functions/SortByKey";
import { ListItem } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import deleteFromList from "../../functions/DeleteFromList";

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

  const deleteProduct = async (id) => {
    await fetchData('https://northwind.vercel.app/api/products/' + id, "DELETE");
    const newProductList = deleteFromList(products, 'id', id);

    setProducts(newProductList);
  };

  const renderProducts = () => {
    return products.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Text style={{ color: '#00B355', fontSize: 16 }}>{"$" + Math.floor(l.unitPrice)}</Text>
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.quantityPerUnit}</ListItem.Subtitle>
        </ListItem.Content>
        <FontAwesome onPress={() => deleteProduct(l.id)} name={"trash"} size={20} color={'#00B355'} />
      </ListItem>
    ))
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderProducts()}
      </ScrollView>
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
