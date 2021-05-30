import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { CategoryContext } from "../../context/Category";
import fetchData from "../../functions/Fetch";
import sortByKey from "../../functions/SortByKey";
import { ListItem } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import deleteFromList from "../../functions/DeleteFromList";
import { FloatingAction } from "react-native-floating-action";


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

  const deleteCategory = async (id) => {
    await fetchData('https://northwind.vercel.app/api/categories/' + id, "DELETE");
    const newCategoryList = deleteFromList(categories, 'id', id);

    setCategories(newCategoryList);
  };

  const renderCategories = () => {
    return categories.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
        </ListItem.Content>
        <FontAwesome onPress={() => deleteCategory(l.id)} name={"trash"} size={20} color={'#00B355'} />
        <FontAwesome onPress={() => {
          navigation.navigate({
            name: "EditCategory",
            params: {
              category: l,
            },
          });
        }} name={"pencil"} size={20} color={'#212A39'} />
      </ListItem>
    ))
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderCategories()}
      </ScrollView>
      <FloatingAction
        onPressItem={name => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Categories;
