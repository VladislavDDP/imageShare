import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from './ProfileScreen';
import FeedsScreen from './FeedsScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#4B3869' },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedsScreen}
        options={{ tabBarLabel: 'Feeds' }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
export default function Main() {
  return (
    <MyTabs />
  );
}