import React from 'react';
import { createBottomTabNavigator, BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native'

import { Home, UserProfile, Presets } from '../screens';

const Tab = createBottomTabNavigator();

const HomeRouter = () => {
  return (
    <Tab.Navigator initialRouteName='Color Selection' >
      <Tab.Screen name="Presets" component={Presets} options={styles}/>
      <Tab.Screen name="Color Selection" component={Home} options={styles}/>
      <Tab.Screen name="User Profile" component={UserProfile} options={styles}/>
    </Tab.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({
  headerShown: false, 
  tabBarActiveBackgroundColor: 'orange', 
  tabBarInactiveBackgroundColor: 'grey',
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'black'
})

