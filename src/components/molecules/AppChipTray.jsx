import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import AppChip from './AppChip'
 
export default function AppChipTray({onRemoveItem=()=>{}, allowRemove=false, controlsSorting=false, dataList, ...additionalScrollProps}) {

    const [currentChip, setCurrentChip] = useState(controlsSorting === true ? "all" : null)

    const [chips, setChips] = useState(dataList)

    const handleOnCurrentSet = (chip)=>{

        setCurrentChip(chip.text)
    }

    const handleOnRemoveChip = (chip)=>{

        setChips(chips.filter(item => item.text !== chip.text))
        onRemoveItem(chips, currentChip)
        if(controlsSorting === true){
            setCurrentChip("all")
        }else{
            null
        }


    }

    

    return (
        <View
            style={styles.container}
        >
            <ScrollView 
                bounces={true}
                horizontal={true}
                style={styles.scrollView}
                showsHorizontalScrollIndicator={false}
                {...additionalScrollProps}
            >

                {
                    controlsSorting === true && (
                        <View
                            style={styles.chipWrapper}
                        >
                            <AppChip 
                                current={currentChip==="all" ? true : false}
                                text="All"
                            />
                        </View>
                    )
                }
                
                {
                    chips.map((chip)=>(
                        <View
                            key={chip.id}
                            style={styles.chipWrapper}
                        >
                            <AppChip 
                                allowRemove={allowRemove}
                                current={currentChip===chip.text ? true : false}
                                key={chip.text}
                                text={chip.text}
                                onSelect={()=>handleOnCurrentSet(chip)}
                                onRemove={()=>handleOnRemoveChip(chip)}
                            />
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    scrollView: {
        width: "100%",
    },
    chipWrapper: {
        marginRight: 10
    }
})