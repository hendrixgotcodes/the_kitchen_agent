import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import AppText from '../components/atoms/AppText'
import AppTextLink from '../components/atoms/AppTextLink'
import AppTextInput from '../components/atoms/AppTextInput'
import AppButton, { FlexibleButton } from '../components/molecules/AppButton'
import AppHeader from '../components/molecules/AppHeader'
import SafeAreaScreen from './SafeAreaScreen'
 
export default function SignupScreen({navigation}) {

    const handleSignmeinOnPress= ()=>{

        navigation.navigate("Signin")

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.kbdAvoidingView}
        >
        
            <SafeAreaScreen>
                <View
                    style={styles.container}
                >
                    <AppHeader 
                        title="Sign up"
                    />

                    <View
                        style={styles.form}
                    >

                        <AppTextInput 
                            placeholder="Full name"
                        />
                        <AppTextInput 
                            placeholder="Email"
                        />
                        <AppTextInput 
                            placeholder="Password"
                        />
                        <AppTextInput 
                            placeholder="Confirm Password"
                        />

                    </View>

                    <View
                        style={styles.footer}
                    >
                        <View
                            style={styles.buttonWrapper}
                        >
                            <AppButton
                                style={styles.primaryBtn}
                                text="Sign up"
                            />
                            <AppButton
                                icon={<MaterialCommunityIcons name="google" size={16} />}
                                style={styles.secondaryBtn}
                                text="Sign in with gmail"
                                type="secondary"
                            />
                        </View>
                        <AppText
                            extraStyle={{marginTop: 10}}
                        >
                            Already have an account. 

                            <AppTextLink
                                onPress={handleSignmeinOnPress}
                            >
                                Sign me in.
                            </AppTextLink>
                        </AppText>
                    </View>
                </View>

            </SafeAreaScreen>
        </KeyboardAvoidingView>
            
    )
}
 
const styles = StyleSheet.create({
    buttonWrapper:{
        width: 223
    },
    container: {
        alignItems: "center",
        flex: 1,
        width: "100%",
        justifyContent: "space-evenly"
    },
    form:{
        height: "40%",
        marginVertical: 20,
        width:"100%",
        justifyContent: "space-between",
    },
    footer: {
        alignItems: "center",
        width: "100%",
        justifyContent:"center"
    },
    kbdAvoidingView:{
        flex: 1,
        width: "100%",
    },
    primaryBtn: {
        height: 41
    },
    secondaryBtn: {
        height: 41,
        marginTop: 10
    }
})