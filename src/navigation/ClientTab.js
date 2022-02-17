import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from "../global/styles";

import { Icon } from 'react-native-elements';
import { create } from "react-test-renderer";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen"
import color from "color";
import { ClientStack } from "./clientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {

    return (
        <ClientTabs.Navigator
            tabBarOptions={{
                activeTintColor: colors.buttons
            }}

        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: 'Home',
                           tabBarIcon: ({color, size}) =>(
                               <Icon
                                  name = "home"
                                  type = "material"
                                  color = {color}
                                  size = {size}

                               />
                           ) 
                    }
                }
            />

            <ClientTabs.Screen
                name="SearchScreen"
                component={ClientStack}
                options={
                    {
                        tabBarLabel: 'Search',
                        tabBarIcon: ({color, size}) =>(
                            <Icon
                                name = "search"
                                type = "material"
                                color = {color}
                                size = {size}

                            />
                        ) 
                    }
                }
            />

        </ClientTabs.Navigator>

    )
}