import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppTextBold from '../components/atoms/AppTextBold'
import SafeAreaScreen from './SafeAreaScreen'
 
export default function BookmarksScreen() {
    return (
        <SafeAreaScreen>

            <View
                style={styles.container}
            >

                <View
                    style={styles.mainWrapper}
                >
                    <AppTextBold
                        extraStyle={styles.header}
                    >
                        Bookmarks
                    </AppTextBold>

                </View>

            </View>

        </SafeAreaScreen>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%'
    },
    header:{
        fontSize: 32,
        textAlign: "left",
        textTransform: "capitalize",
    },
    mainWrapper: {
        // overflow:"hidden",
        width: "100%",
        ...Platform.select({
            android: {
                height: "89%"
            },
            ios:{
                height:"93%"
            }
            
        })
    },
})