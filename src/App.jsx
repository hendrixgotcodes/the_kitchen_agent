import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import { Provider } from 'react-redux';
import store from './store/store';
import MainNavigator from './navigation/MainNavigator';


export default function App() {

  const [currentUser, setCurrentUser] = useState({
    isLoggedIn:false,
    name: "Samuel Asare",
    email: "asare11samuel@gmail.com"
})


  return (
      <Provider
        store={store}
      >
        <MainNavigator />
      </Provider>
  );
}