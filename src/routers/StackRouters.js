import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Splash, Login, Home, DeviceConfiguration} from '../screens';
import HomeRouter from './HomeRouters';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator stackBarOptions={{headerShown: false}} screenOptions={screenOptions}>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeRouter} options={{headerShown: false}} />
      <Stack.Screen name="DeviceConfiguration" component={DeviceConfiguration} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Navigation;

const screenOptions = {
  tabBarStyle: {
    backgroundColor: 'black'
  },
  tabBarItemStyle: {
    backgroundColor: 'orange'
  }
}