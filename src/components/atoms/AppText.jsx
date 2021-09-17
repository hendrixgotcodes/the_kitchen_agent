import React, { useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins'

import _colors from '../../assets/_colors'
 
export default function AppText({color, children, extraStyle=null, ...props}) {
    
    const [isFontLoaded] = useFonts({
        Poppins_400Regular
    })

    color = (color===undefined) ?  _colors.primary : color


    if(!isFontLoaded){
        return (
            <Text 
                style={[
                    {color: color},
                    styles.text,
                    extraStyle
                ]}
                {...props}
            >
                {children}
            </Text>
        )
    }else{
        return (
            <Text 
                style={[
                    {color: color},
                    styles.text, 
                    styles.fontFamily,
                    extraStyle
                ]}
                {...props}
            >
                {children}
            </Text>
        )
    }

    
}
 
const styles = StyleSheet.create({
    text: {
        fontSize: 16
    },
    fontFamily:{
        fontFamily: 'Poppins_400Regular'
    }
})