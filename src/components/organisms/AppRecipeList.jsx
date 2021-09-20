import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import AppRecipeCard from '../molecules/AppRecipeCard'
 
export default function AppRecipeList({data=[]}) {

    const [listData, setListData] = useState(data)
    const [refreshing, setRefreshing] = useState(false)

    return (
        <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            data={listData}
            refreshing={refreshing}
            renderItem={({item})=>(

                
                    <AppRecipeCard 
                        estTime={item.estTime}
                        healthScore={item.healthScore}
                        imgSrc={item.imgSrc}
                        name={item.name}
                        numOfPeoplePerServing={item.numOfPeoplePerServing}
                        type={item.type}
                    />

            )}
            onRefresh={()=>{}}
            style={styles.list}
        />
    )
}
 
const styles = StyleSheet.create({
    contentContainerStyle:{
        flex: 1
    },
    list: {
        flex: 1,
    }
})