'use strict'

import React, { StrictMode, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import AppDietCard from './AppDietCard';

export default function AppDietGrid({extraStyle, gridData, onStateChanged}) {

    const [selectedItems, setSelectedItems] = useState([])


    const handleItemOnPress = (item)=>{

      const _selectedItems = [...selectedItems]

      if(_selectedItems.includes(item)){

          _selectedItems.forEach((itemInIteration, index)=>{

              if(itemInIteration === item){
                _selectedItems.splice(index, 1)
              }

          })

          setSelectedItems(_selectedItems)
          onStateChanged(_selectedItems)


      }else{

        _selectedItems.push(item)
        setSelectedItems(_selectedItems)
        onStateChanged(_selectedItems)

      }

    }

    const Illustration = ({src})=>(

        <Image
            source={src}
            style={styles.illustration}
        />
        
    )

  return (
    // <StrictMode>
    <View style={[styles.container, extraStyle]}>
        <FlatGrid
            bounces={false}
            data={gridData}
            itemDimension={115}
            renderItem={({item}) =>(
                <View style={[styles.itemContainer,]}>
                <AppDietCard
                    color={item.color}
                    img={<item.icon customHeight={30} customWidth={30} />}
                    onPress={()=>handleItemOnPress(item)}
                    selected={selectedItems.includes(item) ? true : false}
                    text={item.text}
                />
                </View>
            )}
            spacing={1}
            style={styles.gridView}
        />
    </View>
    // </StrictMode>
  );
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: "60%",
  },
  gridView: {
    flex: 1,
  },
  illustration:{
      width: "35%",
      height: "35%"
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 130,
    width: 130
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});