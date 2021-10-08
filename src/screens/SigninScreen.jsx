import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { useDispatch } from 'react-redux'
import AppText from '../components/atoms/AppText'
import AppTextLink from '../components/atoms/AppTextLink'
import AppTextInput from '../components/atoms/AppTextInput'
import AppButton, { FlexibleButton } from '../components/molecules/AppButton'
import AppHeader from '../components/molecules/AppHeader'
import SafeAreaScreen from './SafeAreaScreen'
import { userSliceActions } from '../store/features/user'

 
export default function SigninScreen({navigation}) {

    const dispatch = useDispatch()

    const handleSignmeupOnPress= ()=>{

        navigation.navigate("Signup")

    }

    const handleSignIn = ()=>{

        dispatch(userSliceActions.logIn())

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
                        title="Sign in"
                    />

                    <View
                        style={styles.form}
                    >

                        <AppTextInput 
                            placeholder="Full name"
                            extraStyles={{marginBottom: 50}}
                        />
                        <AppTextInput 
                            placeholder="Password"
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
                                text="Sign in"
                                onPress={handleSignIn}
                            />
                            <AppButton
                                icon={<MaterialCommunityIcons name="google" size={16} />}
                                style={styles.secondaryBtn}
                                text="Sign in with gmail"
                                type="secondary"
                            />
                        </View>
                        <AppText
                            extraStyle={{marginTop:10}}
                        >
                            I don't have an account. 
                            <AppTextLink
                                onPress={handleSignmeupOnPress}
                            >
                                Sign me up
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
        marginVertical: 100,
        width:"100%",
    },
    footer:{
        alignItems: "center",
        width: "100%",
        justifyContent:"center",
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