import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FitnessStackNavigator, MainStackNavigator, ProfileStackNavigator } from "./Router";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Fitness" component={FitnessStackNavigator} />
      <Tab.Screen  name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;