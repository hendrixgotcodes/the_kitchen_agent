import React from 'react'
import { Text, StyleSheet,  } from 'react-native'
import {Poppins_700Bold, useFonts, } from '@expo-google-fonts/poppins'

import _colors from '../../assets/_colors'
 
export function H1({children, extraStyle, color=_colors.primary,...props}) {

    const [isFontLoaded] = useFonts({
        Poppins_700Bold
    })

    if(!isFontLoaded){

        return (
            <Text 
                style={[styles.h1, {color: color}, extraStyle,]}
                {...props}
            >
                {children}
            </Text>
        )

    }else{
        return (
            <Text 
                style={[styles.fontStyle, styles.h1, {color: color}, extraStyle,]}
                {...props}
            >
                {children}
            </Text>
        )
    }

}

export function H2({children, extraStyle, color=_colors.primary,...props}) {

    const [isFontLoaded] = useFonts({
        Poppins_700Bold
    })

    if(!isFontLoaded){

        return (
            <Text 
                style={[styles.fontStyle, styles.h2, {color: color}, extraStyle,]}
                {...props}
            >
                {children}
            </Text>
        )

    }else{
        return (
            <Text 
                style={[styles.fontStyle, styles.h3, {color: color}, extraStyle,]}
                {...props}
            >
                {children}
            </Text>
        )
    }

}

export function H3({children}) {

    const [isFontLoaded] = useFonts({
        Poppins_700Bold
    })

    if(!isFontLoaded){

        return (
            <Text style={styles.h2}>
                {children}
            </Text>
        )

    }else{
        return (
            <Text style={[styles.fontStyle, styles.h3]}>
                {children}
            </Text>
        )
    }

}


 
const styles = StyleSheet.create({
    fontStyle: {
        fontFamily: 'Poppins_700Bold',
        color: _colors.primary
    },
    h1:{
        fontSize: 30
    },
    h2:{
        fontSize: 25
    },
    h3:{
        fontSize: 20
    }
})