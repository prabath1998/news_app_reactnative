import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Saved from '../screens/Saved';
import NewsOverview from '../screens/NewsOverview';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
   <Tab.Navigator screenOptions={{ headerShown:false }}>
    <Tab.Screen name='Home' component={Home}></Tab.Screen>
    <Tab.Screen name='Saved' component={Saved}></Tab.Screen>
   </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown:false }} name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="NewsOverview" component={NewsOverview}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
