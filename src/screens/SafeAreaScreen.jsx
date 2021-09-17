import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
 
export default function SafeAreaScreen({children}) {


    return (
        <SafeAreaView 
            style={styles.container}
        >
            <View 
                style={styles.wrapper}
            >
                {children}
            </View>
        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    wrapper:{
        alignItems: "center",
        flex: 1,
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
        width: "100%",
    }
})