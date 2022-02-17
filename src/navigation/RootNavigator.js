import React, {useContext} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from "./authNavigators";
import {AppStack} from "./appStack";
import { SignInContext } from "../contexts/authContext";

export default function RootNavigator(){
    console.log("check1")
// const {signedIn}= useContext(SignInContext)
// console.log("blablabla", signedIn)
//     return(
//         <NavigationContainer>
//         {signedIn.userToken === null  ?  <AuthStack />: <AppStack />}
//     </NavigationContainer>
//     )
}