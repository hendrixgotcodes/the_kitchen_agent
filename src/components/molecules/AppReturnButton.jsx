import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import AppText from '../atoms/AppText'
 
export default function AppReturnButton({extraStyle, onPress,size=16, text}) {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, extraStyle]}
        >
            <MaterialCommunityIcons
                name="chevron-left"
                size={24}
            />
            <AppText
                size={size}
            >
                {text}
            </AppText>
        </Pressable>
    )
}
 
const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flexDirection: "row",
    }
})