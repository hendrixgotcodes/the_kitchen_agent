import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppAvatar from '../atoms/AppAvatar'
import AppText from '../atoms/AppText'
import AppTextBold from '../atoms/AppTextBold'
 
export default function AppUserInfo({title, extraStyle, subTitle}) {
    return (
        <View style={[styles.container, extraStyle]}>
            <AppAvatar 
                imgSource={require("../../assets/img/dp.jpg")}
            />
            <AppTextBold
                extraStyle={styles.title}
                numberOfLines={2}
            >
                {title}
            </AppTextBold>
            <AppText
                ellipsizeMode="middle"
                numberOfLines={1}
            >
                {subTitle}
            </AppText>
        </View>
    )
}



 
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        fontSize: 20,
        textTransform: "capitalize",
        marginVertical: 2,
        textAlign: "center"
    }
})