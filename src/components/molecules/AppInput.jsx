import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import _colors from '../../assets/_colors'
import { AppTextInputSecondary } from '../atoms/AppTextInput'
import { FlexibleButton } from './AppButton'
 
export default function AppInput({onSubmit}) {
    return (
        <View style={styles.container}>

            <AppTextInputSecondary 
                height={50}
                width="83%"
                placeholder="Jollof rice with chicken"
            />
            <FlexibleButton 
                height={50}
                extraStyle={styles.button}
                icon={<MaterialCommunityIcons color={_colors.secondary} name="sort-variant" size={18} />}
                width="15%"
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