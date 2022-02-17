import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreen/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreen/SignInScreen';
import { Screen } from 'react-native-screens';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTab';

import SignUpScreen from '../screens/authScreen/SignUpScreen';

const Auth = createStackNavigator();


export default function AuthStack() {
    return (
        <Auth.Navigator initialRouteName={"SignInWelcomeScreen"}>
            <Auth.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }
                }

            />

            <Auth.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }
                }

            />

            

            <Auth.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: true,
                    ...TransitionPresets.RevealFromBottomAndroid
                }
                }

            />
            




        </Auth.Navigator>
    );
}