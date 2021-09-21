import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Pressable } from 'react-native'
import _colors from '../assets/_colors'
import AppText from '../components/atoms/AppText'
import AppTextBold from '../components/atoms/AppTextBold'
import AppInput from '../components/molecules/AppInput'
import SafeAreaScreen from './SafeAreaScreen'
 
export default function IngredientScreen() {

    const [foodItems, setFoodItems] = useState([
        "chicken",
        "onions",
        "tomatoes",
        "garlic",
        "water melon"
    ])
    
    const header = "Cook with what's \n in your kitchen"

    const handleFoodItemOnPress =(item)=>{

        setFoodItems(foodItems.filter((_item)=>_item !== item))

    }

     

    return (
            
        <SafeAreaScreen>

            <View
                style={styles.container}
            >

                <View
                    style={styles.mainWrapper}
                >
                    <AppTextBold
                        extraStyle={styles.header}
                    >
                        Kitchen hunt
                    </AppTextBold>
                    <AppText
                        extraStyle={styles.subHeader}
                    >
                        Search with atleast 5 food items from your kitchen.
                    </AppText>

                    <AppInput 
                        CustomIcon={<MaterialCommunityIcons name="plus" color="#FFF" size={18} />}
                        extraStyle={styles.input}
                        placeholder="Eg. chicken, gizzard, tomato, etc"
                        onSubmit={(inputValue)=>handleTextInputOnSubmit(inputValue)}
                    />

                    <View
                        style={styles.listWrapper}
                    >
                        {
                            foodItems.length > 0 ? (

                                <FlatList
                                    bounces={false}
                                    data={foodItems}
                                    renderItem={({item})=>(

                                        <FoodItemComponent 
                                            itemName={item}
                                            key={item}
                                            onPress={()=>handleFoodItemOnPress(item)}
                                        />

                                    )}
                                    keyExtractor={(item)=>item.toString()}
                                    style={styles.list}
                                />

                            ):(
                                <ListEmptyComponent />
                            )
                        }
                    </View>

                </View>

            </View>

        </SafeAreaScreen>

    )
}

function FoodItemComponent({itemName="", onPress}){

    return(

        <View
            style={styles.foodItem}
        >
            <AppText>{itemName}</AppText>
            <Pressable
                onPress={onPress}
            >
                <MaterialCommunityIcons name="close-circle" color="#FC6E47" size={16} />
            </Pressable>
        </View>

    )

}

function ListEmptyComponent(){

    return(

        <AppText
            color={_colors.dark_lighter}
        >
            No food items selected
        </AppText>

    )

}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%'
    },
    foodItem:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 7
    },
    header:{
        fontSize: 32,
        textAlign: "left",
        textTransform: "capitalize",
    },
    input:{
    },
    list:{
        flex:1,
    },
    listWrapper:{
        flex:1,
        marginVertical: 10,
        justifyContent: "center"
    },
    mainWrapper: {
        // overflow:"hidden",
        width: "100%",
        ...Platform.select({
            android: {
                height: "89%"
            },
            ios:{
                height:"93%"
            }
            
        })
    },
    subHeader:{
        color: _colors.dark_lighter,
        textAlign: "left",
        paddingVertical: 10,
    }
})