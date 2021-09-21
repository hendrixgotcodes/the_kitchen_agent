import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppAvatar from '../atoms/AppAvatar'
import AppText from '../atoms/AppText'
import AppTextBold from '../atoms/AppTextBold'
 
export default function AppUserInfo({title, subTitle}) {
    return (
        <View style={styles.container}>
            <AppAvatar 
                imgSource={require("../../assets/img/dp.jpg")}
            />
            <AppTextBold
                extraStyle={styles.title}
            >
                Samuel Asare
            </AppTextBold>
            <AppText>asare11samuel@gmail.com</AppText>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        fontSize: 20
    }
})