import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, StatusBar as RNStatusBar, View, SafeAreaView } from 'react-native'
 
export default function SafeAreaScreen({children}) {


    return (
        <SafeAreaView
            style={styles.container}
        >
            <StatusBar 
                barStyle="default"
            />
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
        paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
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