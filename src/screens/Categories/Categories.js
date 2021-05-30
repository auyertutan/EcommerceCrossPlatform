import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

function Categories({ navigation }) {

  useEffect(() => {

  }, []);


  return (
    <View style={styles.container}>
      <Text>Categories</Text>
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
