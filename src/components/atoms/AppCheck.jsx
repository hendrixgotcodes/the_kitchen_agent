import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import _colors from '../../assets/_colors'
 
export default function AppCheck({color=_colors.primary, onPress, size=16}) {
    return (
        <Pressable 
            hitSlop={{
                bottom:20,
                left: 20,
                right: 20,
                top: 20,
            }}
            onPress={onPress}
        >

            <MaterialIcons
                name="check-circle"
                color={color}
                size={size}
            />

        </Pressable>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    }
})