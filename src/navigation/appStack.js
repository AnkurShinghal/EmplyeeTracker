import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ResturantMapScreen from '../screens/RestauranMapScreen';
import DrawerNavigator from './DrawerNavigator';
import { Screen } from 'react-native-screens';


const App = createStackNavigator();


export default function AppStack() {
    return (

           <App.Navigator>
                            <App.Screen
                                name="App"
                                component={DrawerNavigator}
                                options={{
                                    headerShown: false,
                                    ...TransitionPresets.RevealFromBottomAndroid
                                }
                                }

                            />

                            <App.Screen
                                name="RestaurantMapScreen"
                                component={ResturantMapScreen}
                                options={{
                                    headerShown: false,
                                    ...TransitionPresets.RevealFromBottomAndroid
                                }
                                }

                            />
            </App.Navigator>
    )
            }