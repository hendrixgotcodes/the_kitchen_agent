import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import _colors from '../assets/_colors'
import { FlexibleButton } from '../components/molecules/AppButton'
import AppCarousel from '../components/organisms/AppCarousel'
 
export default function OnboardingScreen({navigation}) {

    const handleButtonOnPress = ()=>{

        navigation.navigate("Signup")

    }

    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="default"
            />
            <AppCarousel />
            <FlexibleButton 
                color={_colors.secondary}
                extraStyle={styles.button}
                text="Start Cooking"
                onPress={handleButtonOnPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical:50,
        justifyContent:"center",
        backgroundColor: _colors.secondary
    },
    button: {
        alignSelf: "center",
        backgroundColor: _colors.primary,
        width: 223,
    }
    
})