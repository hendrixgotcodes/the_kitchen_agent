import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import UserIcon from '../illustrations/UserIcon'
 
export default function AppAvatar({customHeight=90, customWidth=90, imgSource=""}) {

    return (
        <View 
            style={[styles.container, {height: customHeight, width: customWidth}]}
        >
            {
                imgSource === "" ? (
                    <Image 
                        // source={imgSource}
                        source={require("../../assets/img/dp.jpg")}
                        style={styles.img}
                    />
                ) : (
                    <UserIcon />
                )
            }
        </View>
    )
}

function DefaultAvtrImage(){

    return(
        <View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dfdfdf",
        borderRadius: 45,
        overflow: "hidden"
    },
    defaultAvtrImg:{

    },
    img:{
        height: "100%",
        width: "100%",
    }
})