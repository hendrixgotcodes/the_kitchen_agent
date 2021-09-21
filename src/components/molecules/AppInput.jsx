import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import _colors from '../../assets/_colors'
import { AppTextInputSecondary } from '../atoms/AppTextInput'
import { FlexibleButton } from './AppButton'
 
export default function AppInput({ CustomIcon=null, extraStyle, placeholder="Jollof rice with chicken", onSubmit=null}) {

    const [textInput, setTextInput] = useState("")

    return (
        <View style={[styles.container, extraStyle]}>

            <AppTextInputSecondary 
                height={50}
                width="83%"
                onChangeText={(text)=>{
                    setTextInput(text)
                }}
                onSubmitEditing={()=>{
                    setTextInput("")
                    onSubmit(textInput)
                }}
                placeholder={placeholder}
                value={textInput}
            />
            <FlexibleButton 
                height={50}
                extraStyle={styles.button}
                icon={CustomIcon === null ? (
                    <MaterialCommunityIcons color={_colors.secondary} name="sort-variant" size={18} />
                ): (
                    CustomIcon
                )}
                width="15%"
                onPress={()=>{
                    setTextInput("")
                    onSubmit(textInput)
                }}
            />
            
        </View>
    )
}
 
const styles = StyleSheet.create({
    button:{
        backgroundColor: _colors.primary,
        borderTopRightRadius: 0,
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    }
})