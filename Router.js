import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./src/screens/Category"
import Detail from "./src/screens/Detail";
import Meal from "./src/screens/Meal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories" 
        screenOptions={{
          headerTitleAlign:"center"
        }}
      >
        <Stack.Screen
          name="Categories"
          component={Category}
        />
        <Stack.Screen
          name="Meals"
          component={Meal}
        />
        <Stack.Screen
          name="Details"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}