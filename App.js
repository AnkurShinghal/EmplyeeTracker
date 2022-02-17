import 'react-native-gesture-handler';
import React from 'react';

import { View, Text, StyleSheet, StatusBar } from 'react-native'
import SignInScreen from './src/screens/authScreen/SignInScreen';
import AuthStack from './src/navigation/authNavigators';
import HomeScreen from './src/screens/HomeScreen';
import SignInWelcomeScreen from './src/screens/authScreen/SignInWelcomeScreen';


import {colors} from './src/global/styles'


import RootNavigator from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SignInContextProvider } from './src/contexts/authContext';


export default function App(){
  
  return(

    <SignInContextProvider>
    <View style = {styles.container}>
      
      {/* <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
    */}
        <RootNavigator />
       
   
    </View>
    </SignInContextProvider> 
  )
    
}

const styles = StyleSheet.create({
  container: {
    
    // flex:1,
  }
})