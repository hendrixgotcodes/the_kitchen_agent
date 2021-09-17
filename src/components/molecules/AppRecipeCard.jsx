import React from 'react'
import { ImageBackground, StyleSheet, View, } from 'react-native'
import AppLabel from '../atoms/AppLabel'
import AppText from '../atoms/AppText'

import { LinearGradient } from 'expo-linear-gradient'
import { H1, H3 } from '../atoms/AppHeading'
import _colors from '../../assets/_colors'
import { Feather} from '@expo/vector-icons'
 
export default function AppRecipeCard({estTime, healthScore, imgSrc="", name, numOfPeoplePerServing,type}) {

    return (
        <View
            style={styles.container}
        >
            <ImageBackground
                source={imgSrc}
                style={styles.imgBg}
            >
                <View style={styles.dimmer}/>
                <View style={styles.contentWrapper}>
                    <View style={styles.labelWrapper}>
                        <AppLabel
                            bgColor="#3A3E5B"
                            text="Primal"
                            textColor="#fff"
                        />
                    </View>
                    <LinearGradient
                        colors={["transparent", "#000000a9","#000"]} 
                        style={styles.infoWrapper}
                    >
                        <View style={styles.heading}>
                            <H1 
                                color={_colors.secondary}
                                extraStyle={{width: "100%"}}
                                ellipsizeMode="tail"
                                numberOfLines={1}
                            >
                                {name}
                            </H1>
                            <AppText color={_colors.dark_lighter} extraStyle={{fontSize: 16}}>
                                {typeof(healthScore) === "number" ? parseFloat(healthScore) : healthScore} health score
                            </AppText>
                        </View>

                        <View
                            style={styles.iconoTextWrapper}
                        >
                            {
                                estTime !== undefined && (
                                    <IconoText
                                        iconTitle="clock"
                                        text={`${estTime} mns`}
                                    />
                                )
                            }
                            
                            {
                                numOfPeoplePerServing !== undefined && (
                                    <IconoText
                                        iconTitle="users"
                                        text={`${numOfPeoplePerServing} p/serving`}
                                    />
                                )
                            }
                        </View>

                    </LinearGradient>
                </View>
            </ImageBackground>
        </View>
    )
}

function IconoText({iconTitle, text=""}){

    return(

        <View style={styles.iconoText}>
            <Feather
                name={iconTitle}
                size={15}
                color={_colors.dark_lighter}
            />
            <AppText
                extraStyle={{color: _colors.dark_lighter}}
            >
                {text}
            </AppText>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        height: "55%",
        width: "90%",
    },
    contentWrapper:{
        alignItems: "flex-start",
        height: "100%",
        justifyContent: "space-between",
        width: "100%",
    },
    dimmer:{
        backgroundColor: "#000",
        height: "100%",
        position: "absolute",
        width: "100%",
        opacity: 0.2,
    },
    heading:{
        marginBottom:10
    },
    iconoText:{
        alignItems: "center",
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 10
    },
    iconoTextWrapper:{
        alignSelf: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },
    imgBg: {
        borderRadius: 30,
        height: "100%",
        overflow: "hidden",
        width: "100%",
    },
    infoWrapper:{
        // height: "30%",
        width: "100%",
        padding: 20,
    },
    labelWrapper:{
        padding: 20
    }
})