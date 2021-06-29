import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../page/Home";
import History from "../page/History";
import Profile from "../page/Profile";
import Fitness from "../page/Fitness";
import Login from "../page/Login";
import Register from "../page/Register";

import Suplemen from "../page/Suplemen";
import HidupSehat from "../page/HidupSehat";
import MakananSehat from "../page/MakananSehat";
import AngkatBeban from "../page/AngkatBeban";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#2b2a26",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="MakananSehat" component={MakananSehat} options={{title: 'Tips'}}/>
      <Stack.Screen name="HidupSehat" component={HidupSehat} options={{title: 'Tips'}}/>
      <Stack.Screen name="Suplemen" component={Suplemen} options={{title: 'Tips'}}/>
    </Stack.Navigator>
  );
}


const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
      {/* <Stack.Screen name="History" component={History} options={{headerShown:false}}/> */}
    </Stack.Navigator>
  );
}

const FitnessStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Fitness" component={Fitness} options={{headerShown:false}}/>
      <Stack.Screen name="AngkatBeban" component={AngkatBeban} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator,FitnessStackNavigator,ProfileStackNavigator,LoginStackNavigator};
