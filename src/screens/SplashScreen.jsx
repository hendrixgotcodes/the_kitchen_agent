import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../components/atoms/AppText'
import Logo from '../components/atoms/Logo'
import Slide1 from '../components/illustrations/carousel/Slide1'
import Slide2 from '../components/illustrations/carousel/Slide2'
import Slide3 from '../components/illustrations/carousel/Slide3'
import AppCarousel from '../components/organisms/AppCarousel'
import SafeAreaScreen from './SafeAreaScreen'
 
export default function SplashScreen() {
    return (
        <SafeAreaScreen>

            {/* <View
                style={styles.logoWrapper}
            >
                <Logo/>
            </View>
            <AppText

            >
                The Kitchen Agent
            </AppText> */}
            
            
        </SafeAreaScreen>
    )
}
 
const styles = StyleSheet.create({
    logoWrapper:{
        height:50,
        width: 50,
        marginBottom: 10
    },
})