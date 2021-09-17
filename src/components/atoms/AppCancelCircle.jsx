import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import {Svg} from 'react-native-svg'
import React from "react";
import _colors from "../../assets/_colors";


export default function AppCancelCircle({color=_colors.primary, onPress, size=16}){

    return (
        <Pressable 
            hitSlop={{
                bottom:20,
                left: 20,
                right: 20,
                top: 20,
            }}
            onPress={onPress}
        >

            <MaterialIcons
                name="cancel"
                color={color}
                size={size}
            />

        </Pressable>
    )

}