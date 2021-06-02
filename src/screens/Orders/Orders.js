import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import fetchData from "../../functions/Fetch";
import sortByDate from "../../functions/SortByDate";
import { ListItem, Avatar } from 'react-native-elements'
import { Spinner } from "../../components/Spinner";

function Orders({ navigation }) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOrders();
  }, [])

  const getOrders = async () => {
    let response = await fetchData('https://northwind.vercel.app/api/orders', "GET");
    const orderList = sortByDate(response, 'orderDate');

    setOrders(orderList);
    console.log(orders);
    setIsLoading(false);
  };

  const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    products.map(product => {
      totalPrice += product.quantity * product.unitPrice
    })

    return totalPrice;
  }

  const renderList = () => {
    return (orders || []).map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{ uri: l.avatar_url }} />
        <ListItem.Content>
          <ListItem.Title>{l.customerId + "-> $" + calculateTotalPrice(l.details)}</ListItem.Title>
          <ListItem.Subtitle>{l.shipAddress.city + ', ' + l.shipAddress.street}</ListItem.Subtitle>
        </ListItem.Content>
        <Text style={{ color: '#00B355' }}>{l.orderDate.split(' ')[0]}</Text>
      </ListItem>
    ))
  }

  if (isLoading === true) {
    return <Spinner />
  } else {
    return (<View style={styles.container}>
      <ScrollView>
        {renderList()}
      </ScrollView>
    </View>)
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Orders;
