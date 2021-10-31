import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileScreen from './ProfileScreen'
import FeedsScreen from './FeedsScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/style'

const Tab = createMaterialTopTabNavigator()

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
  )
}

const Main = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <MyTabs />
    </SafeAreaView>
  )
}

export default Main