import React from "react";
import Main from "./components/Main";
import Login from "./components/Login";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()

export default function Navigate () {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component={Login} 
            options={{ headerShown: false }} /> 
            <Stack.Screen 
            name='Main'
            component={Main}
            options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
}