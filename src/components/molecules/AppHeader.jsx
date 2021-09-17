import React from 'react'
import { View, StyleSheet } from 'react-native'
import { H1 } from '../atoms/AppHeading'
import Logo from '../atoms/Logo'

export default function AppHeader({title}) {
    return (
        <View style={styles.container}>

            <View style={styles.logoWrapper}>
                <Logo />
            </View>

            <View style={styles.headingWrapper}>
                <H1
                    textAlign="center"
                    extraStyle={{
                        textAlign: "center"
                    }}
                >
                    {title}
                </H1>
            </View>
            
        </View>
    )
}
 
const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    headingWrapper: {
        // width: "50%",
    },
    logoWrapper: {
        width: 45,
        height: 45,
        marginBottom: 10
    }

})