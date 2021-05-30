import React from "react";
import Categories from "./src/screens/Categories/Categories";
import Products from "./src/screens/Products/Products";
import Orders from "./src/screens/Orders/Orders";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProductsStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const OrdersStack = createStackNavigator();

const HeaderStyle = {
  headerStyle: {
    backgroundColor: '#212A39',
    borderColor:'blue'
  },
  headerTitleStyle: {
    color: '#00B355',
  },
  headerLayoutPreset: 'center',
  headerTitleAlign: "center",
};

function ProductsStacks() {
  return (
    <ProductsStack.Navigator
      initialRouteName={"Products"}
    >
      <ProductsStack.Screen
        name="Products"
        options={HeaderStyle}
        component={Products}
      />
    </ProductsStack.Navigator>
  );
}

function CategoriesStacks() {
  return (
    <CategoriesStack.Navigator
      initialRouteName={"Categories"}
    >
      <CategoriesStack.Screen
        name="Categories"
        options={HeaderStyle}
        component={Categories}
      />
    </CategoriesStack.Navigator>
  );
}

function OrdersStacks() {
  return (
    <OrdersStack.Navigator
      initialRouteName={"Orders"}
    >
      <OrdersStack.Screen
        name="Orders"
        options={HeaderStyle}
        component={Orders}
      />
    </OrdersStack.Navigator>
  );
}

function TabStacks() {
  return (
    <Tab.Navigator
    tabBarOptions={{ activeBackgroundColor: '#212A39', inactiveBackgroundColor: '#212A39' }}
    >
      <Tab.Screen
        name="Products"
        component={ProductsStacks}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStacks}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStacks}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tab"
              component={TabStacks}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
    </NavigationContainer>
  );
}