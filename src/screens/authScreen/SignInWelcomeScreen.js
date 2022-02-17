import React , {useState, useRef}from 'react';

import { View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import {colors, parameters, title, titleText} from "../../global/styles"
import * as Animatable  from 'react-native-animatable'

import {Icon , Button, SocialIcon} from 'react-native-elements'

import Swiper from 'react-native-swiper'

export default function SignInWelcomeScreen({navigation}){

    return(
        
        <View style={{
            backgroundColor: 'black'
        }}>
                <View style={{justifyContent:'flex-start', alignItems:'center' ,  paddingTop:20, marginTop:80}}>
                    <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>Discover Employees</Text>
                    <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>In Your Area</Text>
                </View>

                <View style={{flex:4 , justifyContent:"center"}}>
                    <Swiper autoplay={true}>
                        <View style={styles.slide1}>
                            <Image
                                source ={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
                                style ={{height:"80%" , width:"80%",backgroundColor:'black'}}
                            />
                        </View>

                        <View style={styles.slide2}>
                            <Image
                                // source ={{uri:'../../img/img1'}}
                                style ={{height:"100%" , width:"100%"}}
                            />
                        </View>

                        <View style={styles.slide3}>
                            <Image
                                source ={{uri:"https://bukasapics.s3.us-eat-2.amazonaws.com/plate4.png"}}
                                style ={{height:"100%" , width:"100%"}}
                            />
                        </View>

                        <View style={styles.slide4}>
                            <Image
                                source ={{uri:"https://bukasapics.s3.us-eat-2.amazonaws.com/plate1.png"}}
                                style ={{height:"100%" , width:"100%"}}
                            />
                        </View>



                    </Swiper>
                </View>

                <View style = {{marginHorizontal:20, marginVertical:30}}>
                            <Button
                            title = "Sign-In"
                            buttonStyle = {parameters.styledButton}
                            titleStyle = {parameters.buttonTitle}
                            onPress = {()=>{
                                navigation.navigate("SignInScreen")
                            }}
                            />
                 </View>
                 <View style = {{alignItems:"center", marginHorizontal:20}}>
                <Button
                    title = "Create an Account"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                    onPress = {()=>{
                        navigation.navigate("SignUpScreen")
                    }}
                />
            </View>
                
        </View>

    )
}

const styles = StyleSheet.create({
    slide1: {
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6EB'
    },

    slide2: {
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#97CAE5'
    },

    slide3: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    }
})