import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FitnessStackNavigator, MainStackNavigator, ProfileStackNavigator,LoginStackNavigator } from "./Router";
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
        } else if (route.name === 'Exercise') {
          iconName = focused ? 'fitness' : 'fitness';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'list' : 'list';
        }else if (route.name === 'Log Out') {
          iconName = focused ? 'arrow-back-outline' : 'arrow-back-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      style:{
        backgroundColor: '#2b2a26'
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
      
      <Tab.Screen name="Log Out" component={LoginStackNavigator} options={{tabBarVisible: false,}}/>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Exercise" component={FitnessStackNavigator}/>
      <Tab.Screen  name="Profile" component={ProfileStackNavigator}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;