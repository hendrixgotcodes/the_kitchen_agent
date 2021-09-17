import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AppDietGrid from '../components/molecules/AppDietGrid'
import AppHeader from '../components/molecules/AppHeader'

import GlutenFree from '../components/illustrations/GlutenFree'
import Ketogenic from '../components/illustrations/Ketogenic'
import Vegetarian from '../components/illustrations/Vegetarian'
import Vegan from '../components/illustrations/Vegan'
import LactoVege from '../components/illustrations/LactoVege'
import Whole30 from '../components/illustrations/Whole30'
import Paleo from '../components/illustrations/Paleo'
import Primal from '../components/illustrations/Primal'
import SafeAreaScreen from './SafeAreaScreen'
import { FlexibleButton } from '../components/molecules/AppButton'
import _colors from '../assets/_colors'
import AppReturnButton from '../components/molecules/AppReturnButton'
import Pescatarian from '../components/illustrations/Pescatarian'

const gridData=[
    {
      id: 1,
      color: "#FC6E47",
      icon: GlutenFree,
      text: "Gluten Free"
    },
    {
      id: 2,
      color: "#007C42",
      icon: Ketogenic,
      text: "Ketogenic"
    },
    {
      id: 3,
      color: "#B5C868",
      icon: Vegetarian,
      text: "Vegetarian"
    },
    {
      id: 4,
      color: "#37C5FF",
      icon: Vegan,
      text: "Vegan"
    },
    {
      id: 5,
      color: "#FDE86E",
      icon: LactoVege,
      text: "Lacto Verge"
    },
    {
        id:6,
        color: "#007C42",
        icon: Pescatarian,
        text: "Pescatarian"
    },
    {
      id: 7,
      color: "#E5D9BF",
      icon: Whole30,
      text: "Whole 30"
    },
    {
      id: 8,
      color: "#FC6E47",
      icon: Paleo,
      text: "Paleo"
    },{
        id:10,
        color: "#3A3E5B",
        icon: Primal,
        text: "Primal"
    }
]
 
export default function DietSelectionScreen() {

    const [buttonColor, setButtonColor] = useState(_colors.primary)
    const [buttonBGColor, setButtonBGColor] = useState("inherit")

    const handleOnDietStateChanged = (dietState)=>{

        if(dietState.length > 0){
            setButtonColor(_colors.secondary)
            setButtonBGColor(_colors.primary)
        }else{
            setButtonColor(_colors.primary)
            setButtonBGColor(_colors.secondary)
        }

    }

    
    return (
        <SafeAreaScreen style={styles.container}>

            <AppReturnButton
                extraStyle={styles.appRtnBtn}
                size={16}
                text="Back"
            />

            <View>
                <AppHeader 
                    title={`Choose your \n type of diet`}
                    
                />
            </View>

            <AppDietGrid
                extraStyle={styles.dietGrid}
                gridData={gridData}
                onStateChanged={handleOnDietStateChanged}
            />

            <FlexibleButton
                backgroundColor={buttonBGColor}
                color={buttonColor}
                extraStyle={styles.button}
                text="Proceed"
            />
            
        </SafeAreaScreen>
    )
}
 
const styles = StyleSheet.create({
    appRtnBtn:{
        alignSelf:"flex-start"
    },
    button:{
        alignSelf: "center",
        width: 223,
        // borderBottomLeftRadius: 0,
        borderWidth: 1,
        borderColor: _colors.primary
    },
    container: {
 
    },
    dietGrid:{
        marginVertical: 30
    },
    header:{
        marginBottom: 20
    }
})