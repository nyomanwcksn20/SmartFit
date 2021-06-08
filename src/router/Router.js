import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../page/Home";
import History from "../page/History";
import Profile from "../page/Profile";
import Fitness from "../page/Fitness";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "dimgray",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
}

const FitnessStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Fitness" component={Fitness} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator,FitnessStackNavigator,ProfileStackNavigator };