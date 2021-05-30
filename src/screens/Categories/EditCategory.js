import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Input } from "react-native-elements";
import fetchDataWithBody from "../../functions/FetchWithBody";

function EditCategory({ navigation, ...params }) {

  const [category, setCategory] = useState(
    params.route.params.category
  );

  useEffect(() => {
    navigation.setOptions({
      title: "Edit Category",
    })
  }, [])

  const editCategory = async () => {
    await fetchDataWithBody('https://northwind.vercel.app/api/categories/' + category.id, "PUT", JSON.stringify(category));
    navigation.reset({
      index: 0,
      routes: [{ name: 'Categories' }],
    });
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />
      <View style={styles.inputView}>
        <Input
          value={category.name}
          onChange={(e) => setCategory({ ...category, name: e.target.value })}
          placeholder="Name"
        />
        <Input
          value={category.description}
          onChange={(e) => setCategory({ ...category, description: e.target.value })}
          placeholder="Description"
        />
        <TouchableOpacity onPress={() => editCategory()} style={styles.updateButton}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  updateButton: {
    width: 200,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B355'
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  inputView: {
    flex: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default EditCategory;
