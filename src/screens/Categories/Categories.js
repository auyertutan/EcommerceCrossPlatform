import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { CategoryContext } from "../../context/Category";
import fetchData from "../../functions/Fetch";
import sortByKey from "../../functions/SortByKey";
import { ListItem } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import deleteFromList from "../../functions/DeleteFromList";
import { FloatingAction } from "react-native-floating-action";
import { Spinner } from "../../components/Spinner";


function Categories({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useContext(CategoryContext);

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async () => {
    let response = await fetchData('https://northwind.vercel.app/api/categories', "GET");
    const categoryList = sortByKey(response, 'id');

    setCategories(categoryList);
    setIsLoading(false);
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

  if (isLoading === true) {
    return <Spinner />
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          {renderCategories()}
        </ScrollView>
        <FloatingAction
          onPressMain={() => {
            navigation.navigate({
              name: "AddCategory",
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Categories;
