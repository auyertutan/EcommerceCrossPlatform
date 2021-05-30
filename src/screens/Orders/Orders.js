import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

function Orders({ navigation }) {

  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <Text>Orders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Orders;
