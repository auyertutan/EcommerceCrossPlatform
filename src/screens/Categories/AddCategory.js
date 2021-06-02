import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Input } from "react-native-elements";
import fetchDataWithBody from "../../functions/FetchWithBody";

function AddCategory({ navigation }) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    navigation.setOptions({
      title: "Add Category",
    })
  }, [])

  const editCategory = async () => {
    await fetchDataWithBody('https://northwind.vercel.app/api/categories', "POST", JSON.stringify({ description,name }));
   
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <TouchableOpacity onPress={() => editCategory()} style={styles.updateButton}>
          <Text style={styles.buttonText}>Add</Text>
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
    height: 40,
    borderRadius: 8,
    marginTop:10,
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

export default AddCategory;
