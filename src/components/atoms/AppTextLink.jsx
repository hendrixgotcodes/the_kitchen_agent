import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import AppText from './AppText'
 
export default function AppTextLink({children, onPress}) {
    return (
        <Pressable
            onPress={onPress}
        >
            <AppText
                extraStyle={styles.text}
            >
                {children}
            </AppText>
        </Pressable>
    )
}
 
const styles = StyleSheet.create({
    text: {
        textDecorationLine: "underline",
    }
})