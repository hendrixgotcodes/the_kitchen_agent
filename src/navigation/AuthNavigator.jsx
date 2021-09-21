import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/OnboardingScreen'
import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
}

const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen 
                name="Onboarding"
                component={OnboardingScreen}
            />

            <Stack.Screen 
                name="Signin"
                component={SigninScreen}
            />

            <Stack.Screen 
                name="Signup"
                component={SignupScreen}
            />

        </Stack.Navigator>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})