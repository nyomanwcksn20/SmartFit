import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FitnessStackNavigator, MainStackNavigator, ProfileStackNavigator } from "./Router";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Fitness') {
          iconName = focused ? 'fitness' : 'fitness';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'list' : 'list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Fitness" component={FitnessStackNavigator} />
      <Tab.Screen  name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;