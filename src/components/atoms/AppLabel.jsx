import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppText from './AppText'
 
export default function AppLabel({text, bgColor, textColor}) {
    return (
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <AppText color={textColor}>{text}</AppText>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 8,
    }
})