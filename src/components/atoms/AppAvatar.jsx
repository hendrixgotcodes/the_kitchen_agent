import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
 
export default function AppAvatar({customHeight=90, customWidth=90, imgSource}) {

    return (
        <View 
            style={[styles.container, {height: customHeight, width: customWidth}]}
        >
            <Image 
                // source={imgSource}
                source={require("../../assets/img/dp.jpg")}
                style={styles.img}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        borderRadius: 45,
        overflow: "hidden"
    },
    img:{
        height: "100%",
        width: "100%",
    }
})