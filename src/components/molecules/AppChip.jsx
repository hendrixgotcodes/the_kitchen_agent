import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, } from 'react-native'
import _colors from '../../assets/_colors'
import AppText from '../atoms/AppText'
 
export default function AppChip({allowRemove=false, current, onRemove, onSelect,text}) {

    const [isCurrent, setCurrent] = useState(current)


    useEffect(()=>{
        setCurrent(current)
    }, [current])

    if(allowRemove !== true){
        onRemove = null
    }

    return (
        <Pressable
            hitSlop={{
                top: 10,
                bottom: 10,
                right: 10,
                left: 10
            }} 
            onPress={onSelect}
            style={isCurrent === true ? [styles.container, styles.isCurrent] : styles.container}
        >
            <AppText
                color={isCurrent === true ? _colors.secondary : _colors.primary}
                // color={_colors.secondary}
                extraStyle={isCurrent === true ? {color: _colors.secondary, marginRight: 5} : {color: _colors.primary, marginRight: 5}}
            >
                {text}
            </AppText>

            {allowRemove === true && (
                    <Pressable 
                        hitSlop={{
                            top: 20,
                            bottom: 20,
                            right: 20,
                            left: 0
                        }}
                        onPress={onRemove}
                    >
                        <MaterialCommunityIcons 
                            color={isCurrent === true ? _colors.secondary : _colors.primary}
                            name="close-circle-outline" 
                            size={16}
                        />
                    </Pressable>
                )
            }
        </Pressable>
    )
    
}
 
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderWidth: 1,
        borderColor: _colors.primary,
        borderRadius: 15,
        flexDirection: "row",
        height: 29,
        justifyContent: "center",
        paddingHorizontal: 10,
        // width: "fit-content",
    },
    isCurrent: {
        backgroundColor: _colors.primary,
    },
    isCurrent_text:{
        color: _colors.secondary
    },
    text: {
        marginLeft: 5
    }
})