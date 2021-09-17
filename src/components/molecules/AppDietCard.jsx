import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import _colors from '../../assets/_colors'
import AppCancelCircle from '../atoms/AppCancelCircle'
import AppCheck from '../atoms/AppCheck'
import AppText from '../atoms/AppText'
 
export default function AppDietCard({color="transparent", img=null, onPress, selected=false, text}) {

    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, {backgroundColor: color}]}
        >

            {
                selected === true && (
                    <View style={styles.appCheckWrapper}>
                        <AppCheck
                            size={24}
                        />
                    </View>
                )
            }

            {img}

            <AppText
                color={_colors.secondary}
                // ellipsizeMode="middle"
                extraStyle={styles.text}
                numberOfLines={2}
            >
                {text}
            </AppText>
            
        </Pressable>
    )
}
 
const styles = StyleSheet.create({
    appCheckWrapper:{
        alignSelf: "center",
        backgroundColor: _colors.secondary,
        borderRadius: 100,
        position: "absolute",
        right: "-6%",
        top: "-6%",
        zIndex: 100,
        elevation: 3
    },
    container: {
        alignItems: "center",
        borderRadius: 4,
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        width: "100%" ,
        padding: 10,
    },
    text:{
        textAlign: "center"
    }
})