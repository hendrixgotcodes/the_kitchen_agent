import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import TabNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'
import { useSelector } from 'react-redux'
import { selectUserLoginState } from '../store/features/user'
 
export default function MainNavigator() {

    const isUserLoggedIn = useSelector(selectUserLoginState)

    return (
        <>
            <NavigationContainer>

                {
                    isUserLoggedIn ? (
                        <TabNavigator />
                    ) : (
                        <AuthNavigator />
                    )
                }
                {/* <TabNavigator /> */}

            </NavigationContainer>
        </>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})