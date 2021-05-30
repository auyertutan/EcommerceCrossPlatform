import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

function Products({ navigation }) {

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
