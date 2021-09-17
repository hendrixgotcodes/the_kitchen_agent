import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ExpoCustomFonts from './screens/FontTest';

import {H1, H2, H3} from './components/atoms/AppHeading'
import AppText from './components/atoms/AppText';
import AppTextInput, { AppTextInputSecondary } from './components/atoms/AppTextInput';
import AppButton, { FlexibleButton } from './components/molecules/AppButton';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppTextLink from './components/atoms/AppTextLink';
import Logo from './components/atoms/Logo';
import AppCancelCircle from './components/atoms/AppCancelCircle';
import AppHeader from './components/molecules/AppHeader';
import AppDietCard from './components/molecules/AppDietCard';
import AppRecipeCard from './components/molecules/AppRecipeCard';
import AppChip from './components/molecules/AppChip';
import AppInput from './components/molecules/AppInput';
import AppChipTray from './components/molecules/AppChipTray';
import AppDietGrid from './components/molecules/AppDietGrid';
import GlutenFree from './components/illustrations/GlutenFree';
import Ketogenic from './components/illustrations/Ketogenic';
import LactoVege from './components/illustrations/LactoVege';
import Paleo from './components/illustrations/Paleo';
import Pescatarian from './components/illustrations/Pescatarian';
import Primal from './components/illustrations/Primal';
import Vegan from './components/illustrations/Vegan';
import Vegetarian from './components/illustrations/Vegetarian';
import Whole30 from './components/illustrations/Whole30';
import SafeAreaScreen from './screens/SafeAreaScreen';
import DietSelectionScreen from './screens/DietSelectionScreen';
import SplashScreen from './screens/SplashScreen';
import AppCarousel from './components/organisms/AppCarousel';
import OnboardingScreen from './screens/OnboardingScreen';

const img = ()=>{

  return(
      <Image
        width={30}
        height={30}
        source={require("./assets/img/glutten-free.png")}
      />
  )

}

export default function App() {
  return (
    // <SplashScreen/>
    <OnboardingScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
