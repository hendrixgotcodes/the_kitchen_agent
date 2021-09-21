import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';


export default function App() {
  return (
      <NavigationContainer>

        <AuthNavigator />

      </NavigationContainer>
  );
}