import React, { useState } from 'react'
import {Text, StyleSheet, TextInput} from 'react-native'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import _colors from '../../assets/_colors'

export default function AppTextInput({ extraStyles, placeholder }){

    const [borderColor, setBorderColor] = useState(_colors.primary)
    
    const [isFontLoaded] = useFonts({
        Poppins_400Regular
    })

    const handleOnFocus = ()=>{

        setBorderColor(_colors.complementary)

    }

    const handleOnBlur = ()=>{

        setBorderColor(_colors.primary)

    }

    if(!isFontLoaded){

        return(
            <TextInput
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                placeholder={placeholder}
                style={[
                    {borderBottomColor: borderColor}, 
                    styles.default, 
                    extraStyles
                ]}
            />
        )

    }else{

        return(
            <TextInput
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                placeholder={placeholder}
                style={[
                        {borderBottomColor: borderColor}, 
                        styles.default, 
                        styles.fontFamily,
                        extraStyles
                ]}
            />
        )

    }

}

export function AppTextInputSecondary({extraStyles, height=44, width="85%", ...props}){

    const [isFontLoaded] = useFonts({
        Poppins_400Regular
    })

    if(!isFontLoaded){

        return(
            <TextInput 
                {...props}
                style={[styles.secondaryDefault, {width: width, height: height}, extraStyles]}
            />
        )

    }else{

        return(
            <TextInput 
                {...props}
                style={[ styles.secondaryDefault, styles.fontFamily, {width: width, height: height}, extraStyles]}
            />
        )

    }

}

const styles = StyleSheet.create({

    default:{
        borderColor: 'transparent',
        color: _colors.primary,
        borderBottomWidth: 1.3,
        fontSize: 16,
        padding: 7,
        width: '100%'
    },
    fontFamily:{
        fontFamily: 'Poppins_400Regular'
    },
    secondaryDefault:{

        backgroundColor: _colors.offwhite,
        borderRadius: 15,
        color: _colors.dark_lighter,
        fontSize: 16,
        padding: 10,

    }

})