import React from "react";
import Categories from "./src/screens/Categories/Categories";
import EditCategory from "./src/screens/Categories/EditCategory";
import Products from "./src/screens/Products/Products";
import Orders from "./src/screens/Orders/Orders";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TabBarLabel } from "./src/components/TabBarLabel";
import { TabBarIcon } from "./src/components/TabBarIcon";
import { ProductProvider } from "./src/context/Product";
import { CategoryProvider } from "./src/context/Category";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProductsStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const OrdersStack = createStackNavigator();

const HeaderStyle = {
  headerStyle: {
    backgroundColor: '#212A39',
    borderColor: 'blue'
  },
  headerTitleStyle: {
    color: '#00B355',
  },
  headerLayoutPreset: 'center',
  headerTintColor: '#ffffff',
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
      <CategoriesStack.Screen
        name="EditCategory"
        options={HeaderStyle}
        component={EditCategory}
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

function NavStacks() {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeBackgroundColor: '#212A39', inactiveBackgroundColor: '#212A39' }}
    >
      <Tab.Screen
        name="Products"
        component={ProductsStacks}
        options={{
          tabBarLabel: ({ focused }) => <TabBarLabel title={'Products'} focused={focused} />,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} iconName={'list-ul'} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStacks}
        options={{
          tabBarLabel: ({ focused }) => <TabBarLabel title={'Categories'} focused={focused} />,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} iconName={'cutlery'} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStacks}
        options={{
          tabBarLabel: ({ focused }) => <TabBarLabel title={'Orders'} focused={focused} />,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} iconName={'first-order'} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <CategoryProvider>
        <ProductProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Nav"
              component={NavStacks}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </ProductProvider>
      </CategoryProvider>
    </NavigationContainer>
  );
}