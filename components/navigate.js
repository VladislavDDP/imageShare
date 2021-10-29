import React from "react"
import Main from "./Main"
import Login from "./Login"
import { Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

const Stack = createStackNavigator()

export default function Window (props) {

    return <SafeAreaProvider>
            <NavigationContainer>
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
        </SafeAreaProvider>
}