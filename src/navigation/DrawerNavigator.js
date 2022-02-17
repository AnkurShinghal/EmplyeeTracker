import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTab';

import { Icon } from 'react-native-elements/dist/icons/Icon';
import {colors} from "../global/styles";
import BusinessConsoleScreen from '../screens/businessConsoleScreen';
import DrawerContent from '../components/DrawerContent';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator()


export default function DrawerNavigator(){

return(
    <Drawer.Navigator
        drawerContent = {props => <DrawerContent {...props}/>}
    >

       <Drawer.Screen
          name = "RootClientTabs"
          component = {RootClientTabs}

          options = {{
              title: 'Client',
              drawerIcon: ({focussed, size })=>(
                  <Icon
                      type = "material-community"
                      name = "home"
                    //   color = {foccused ? '#7cc' : colors.grey2}
                      size = {size}
                  />
              )
          }}
       />

            <Drawer.Screen
                    name = "Business ConsoleScreen"
                    component = {BusinessConsoleScreen}

                    options = {{
                        title: 'Business Console',
                        drawerIcon: ({focussed, size })=>(
                            <Icon
                                type = "material"
                                name = "business"
                                // color = {foccused ? '#7cc' : colors.grey2}
                                size = {size}
                            />
                        )
                    }}
                />

    </Drawer.Navigator>
)

}