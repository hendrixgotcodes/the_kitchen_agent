import React from 'react'
import { Pressable, StyleSheet, View, } from 'react-native'
import _colors from '../../assets/_colors'
import AppText from '../atoms/AppText'
 
export default function AppButton({icon=null, onPress, style=null, text, type="primary"}) {

    if(type==="primary"){

        return (
            <Pressable style={[styles.default, styles.primary, style]}>
                {icon !== null && <View style={styles.iconWrapper}>{icon}</View>}
                <AppText color="#fff">
                    {text}
                </AppText>
            </Pressable>
        )

    }else{

        return (
    
            <Pressable style={[styles.default, styles.secondary, style]}>
                {icon !== null && <View style={styles.iconWrapper}>{icon}</View>}
                <AppText color="#000">
                    {text}
                </AppText>
            </Pressable>
    
        )

    }

}

export function FlexibleButton({backgroundColor=_colors.secondary, color=_colors.primary, extraStyle=null, height=44, icon=null, text="", onPress, width=41, ...props}){

    return(

        <Pressable
            onPress={onPress}
            style={[
                styles.flexibleButton,
                {backgroundColor, height: height, width: width},
                extraStyle
            ]}
            {...props}
        >
            {/* {icon !== null && icon} <AppText>{text}</AppText> */}
            {icon !== null && icon}
            <AppText color={color}>{text}</AppText>
        </Pressable>

    )

}
 
const styles = StyleSheet.create({
    default: {
        alignItems: "center",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    flexibleButton: {
        alignItems: "center",
        borderRadius: 20,
        flexDirection: "row",
        height: 41,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    iconWrapper:{
        marginRight: 5
    },
    primary: {
        backgroundColor: _colors.primary
    },
    secondary:{
        backgroundColor: "transparent",
        borderWidth: 1.3,
        borderColor: _colors.primary
    },
})