import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins'
 
export default function ExpoCustomFonts() {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular
    })

    if(!fontsLoaded){

        return null

    }else{

        return (
            <View style={styles.container}>
    
                <Text style={styles.text}>
                    Hello react
                </Text>
                
            </View>
        )

    }

}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontFamily: 'Montserrat_400Regular', 
        color: "#1DA1F2",
    }
})


