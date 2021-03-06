import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import AppTextBold from '../components/atoms/AppTextBold'
import AppChipTray from '../components/molecules/AppChipTray'
import AppInput from '../components/molecules/AppInput'
import AppRecipeCard from '../components/molecules/AppRecipeCard'
import AppRecipeList from '../components/organisms/AppRecipeList'
import SafeAreaScreen from './SafeAreaScreen'
 

const recipeList = [
    {
        estTime: 15,
        imgSrc: require("../assets/img/feed/recipe2.jpg"),
        healthScore: 5.0,
        name: "Afrolems",
        numOfPeoplePerServing: 10,
        type: "primal"
    }
]

export default function HomeScreen() {
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
                        Recipes
                    </AppTextBold>

                    <AppInput 
                        extraStyle={styles.input}
                    />

                    <AppChipTray
                        dataList={[
                            {text: "Adjoa"},
                            {text: "Benada"},
                            {text: "Wukuada"},
                            {text: "Yawada"},
                            {text: "Fiaada"},
                            {text: "Memeneda"},
                        ]}
                        controlsSorting={false}
                    />
                    
                    <View
                        style={styles.listWrapper}
                    >
                        <AppRecipeList
                            data={recipeList}
                        />
                    </View>

                </View>

            </View>

        </SafeAreaScreen>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%'
    },
    header:{
        fontSize: 32
    },
    input:{
        paddingVertical: 15
    },
    listWrapper:{
        marginVertical: 20,
        flex: 1
    },
    mainWrapper: {
        width: "100%",
        ...Platform.select({
            android: {
                height: "89%"
            },
            ios:{
                height:"93%"
            }
            
        })
    }
})