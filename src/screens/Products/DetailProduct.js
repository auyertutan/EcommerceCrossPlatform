import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Spinner } from "../../components/Spinner";
import fetchData from "../../functions/Fetch";

function DetailProduct({ navigation, ...params }) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: "Product Detail",
    })
    getProduct(params.route.params.id);
    setIsLoading(false);
  }, []);

  const getProduct = async (id) => {
    const result = await fetchData('https://northwind.vercel.app/api/products/' + id, "GET");
    console.log(result);
    setProduct(result);
  };

  const camelCaseToNormalCase = (string) => {
    return string.replace(/([A-Z])/g, ' $1')
      .replace(/^./, function (str) { return str.toUpperCase(); })
  }

  const renderItems = () => {
    let values = Object.values(product);
    let keys = Object.keys(product);

    return (keys || []).map((item, index) => (
      <View key={index} style={styles.textContainer}>
        <View style={styles.itemView}>
          <View style={{ flex: .4 }}>
            <Text style={styles.label}>{camelCaseToNormalCase(item)}: </Text>
          </View>
          <View style={{ flex: .6 }}>
            <Text style={styles.objectDetail}>{values[index].toString()}</Text>
          </View>
        </View>
      </View>
    ))
  }

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {renderItems()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  label: {
    color: '#00B355',
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  objectDetail: {
    color: '#212A39',
    fontSize: 17,
  }
});

export default DetailProduct;
