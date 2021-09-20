import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import _colors from '../assets/_colors'
import { FlexibleButton } from '../components/molecules/AppButton'
import AppCarousel from '../components/organisms/AppCarousel'
 
export default function OnboardingScreen() {
    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="default"
            />
            <AppCarousel />
            <FlexibleButton 
                text="Start Cooking"
                color={_colors.secondary}
                extraStyle={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical:50,
        justifyContent:"center"
    },
    button: {
        alignSelf: "center",
        backgroundColor: _colors.primary,
        width: 223,
    }
    
})