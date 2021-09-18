import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import AppText from './AppText'
 
export default function AppTextLink({children, onPress}) {
    return (
        
        <AppText
            extraStyle={styles.text}
            onPress={onPress}
        >
            {children}
        </AppText>
    )
}
 
const styles = StyleSheet.create({
    text: {
        textDecorationLine: "underline",
    }
})