import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "./screens/AuthScreen/AuthScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import DetailScreen from "./screens/DetailScreen/DetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OptionScreen from "./screens/OptionScreen/OptionScreen";
import CartScreen from "./screens/CartScreen/CartScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Определение Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Товары" component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name="Корзина" component={CartScreen} options={{headerShown: false}} />
      <Tab.Screen name="Настройки" component={OptionScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Auth'} component={AuthScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name={'Home'} component={TabNavigator} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
