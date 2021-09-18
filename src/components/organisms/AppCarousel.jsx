import React, { useRef, useState } from 'react'
import { View, StyleSheet, useWindowDimensions, FlatList, Text, Animated } from 'react-native'
import AppText from '../atoms/AppText'
import AppTextBold from '../atoms/AppTextBold'

import Slide1 from '../illustrations/carousel/Slide1'
import Slide2 from '../illustrations/carousel/Slide2'
import Slide3 from '../illustrations/carousel/Slide3'
import AppHeader from '../molecules/AppHeader'

const data = [

    {
        id:1,
        title: "Cook what comes to mind",
        description: 
        `Lorem ipsum dolor sit amet, consectetur \n adipiscing elit, sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. `,
        Illustration: Slide1
    },
    {
        id:2,
        title: "Get rid of the old torny books",
        description: `Lorem ipsum dolor sit amet, consectetur \n adipiscing elit, sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. `,
        Illustration: Slide2
    },
    {
        id:3,
        title: "Invite your friends over",
        description: 
        `Lorem ipsum dolor sit amet, consectetur \n adipiscing elit, sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. `,
        Illustration: Slide3
    },

]
 
export default function AppCarousel() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const slideRef = useRef(null)
    const scrollX = useRef(new Animated.Value(0)).current

    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    return (
        <View style={[styles.container]}>

            <FlatList
                bounces={false}
                data={data}
                horizontal={true}                
                keyExtractor={(item)=>item.id.toString()}
                pagingEnabled={true}
                renderItem={({item})=>(
                    <CarouselItem 
                        title={item.title}
                        description={item.description}
                        Illustration={item.Illustration}
                    />
                )}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                showsHorizontalScrollIndicator={false}
            />

            <Paginator 
                data={data}
                scrollX={scrollX}
            />
            
        </View>
    )
}

function CarouselItem({title, description, Illustration}){

    const {width} = useWindowDimensions()

    return(

        <View
            style={[styles.carouselItem, {width}]}
        >

            <View
                style={styles.illustrationWrapper}
            >
                <Illustration 
                    
                />
            </View>

            <View
                style={styles.textWrapper}
            >
                <AppTextBold
                    extraStyle={styles.title}
                    
                >
                    {title}
                </AppTextBold>

                <AppText
                    extraStyle={styles.description}
                >
                    {description}
                </AppText>
            </View>

        </View>

    )

}

function Paginator({data, scrollX}) {

    const {width} = useWindowDimensions()

    return (
        <View style={styles.paginator}>
             {
                 data.map((_, i)=>{

                    const inputRange = [(i-1) * width, i*width, (i+1)*width]

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: 'clamp'
                    })

                    // const opacity = scrollX.interpolate({
                    //     inputRange,
                    //     outputRange: [0.3, 1, 0.3],
                    //     // extrapolate: "clamp"
                    // })
                     
                    return(
                        <Animated.View 
                            key={i.toString()}
                            style={[styles.dot, {width: dotWidth,}]}
                        />
                    )
                })
             }
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carouselItem:{
        // flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    description:{
        textAlign: "center",
    },
    dot:{
        height: 8,
        backgroundColor: "#000",
        borderRadius: 5,
        marginHorizontal: 8
    },
    flatList:{
        // flex: 3,\
    },
    illustrationWrapper:{
        alignItems: "center",
        justifyContent:"center",
        marginBottom:50,
    },
    textWrapper:{
        // flex: 0.2,
        justifyContent: "center",
        alignItems:"center"
    },
    title:{
        fontWeight: "900",
        fontSize: 26,
        textAlign: "center"
    },
    paginator:{
        flexDirection: "row",
        height: 64,
        alignSelf: "center"
    },
})