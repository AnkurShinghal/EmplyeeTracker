import React from "react";
import { Dimensions } from "react-native";

import { View, Text , StyleSheet , FlatList, ImageBackground} from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SearchComponent from "../components/SearchComponent";
import { filterData } from "../global/Data";
import { colors } from "../global/styles";
import { filter } from "lodash";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}){

    return(
        <View style={{flex:1,marginHorizontal:10}}>
            <SearchComponent/>
            <View>
               <FlatList
                    style={{marginBottom:1}}
                    data={filterData}
                    keyExtractor = {item=>item.id}
                    renderItem = {({item})=>(
                        <TouchableWithoutFeedback
                            onPress= {()=>{
                                navigation.navigate("SearchResultScreen", {item:item.name})
                            }}
                        >
                            <View style={styles.imageView}>
                                <ImageBackground
                                   style={styles.image}
                                   source={item.image}
                                  >
                                <View style={styles.textView}>

                                    <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                                </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}

                    horizontal = {false}
                    showsVerticalScrollIndicator = {false}
                    numColumns = {2}
                    ListHeaderComponent = {<Text styles={styles.listHeader}>Top Categories</Text>}
                    ListFooterComponent = {<Footer/>}
                     />
            </View>
        </View>
    )
}

const Footer = ()=>{
    return(
        <View style={{marginBottom:10, marginBottom:30}}>
        <View >
        <FlatList
             style={{marginBottom:1}}
             data={filterData}
             keyExtractor = {item=>item.id}
             renderItem = {({item})=>(
                 <TouchableWithoutFeedback
                     onPress= {()=>{
                         navigation.navigate("SearchResultScreen", {item:item.name})
                     }}
                 >
                     <View style={styles.imageView}>
                         <ImageBackground
                            style={styles.image}
                            source={item.image}
                           >
                         <View style={styles.textView}>

                             <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                         </View>
                         </ImageBackground>
                     </View>
                 </TouchableWithoutFeedback>
             )}

             horizontal = {false}
             showsVerticalScrollIndicator = {false}
             numColumns = {2}
             ListHeaderComponent = {<Text styles={styles.listHeader}>More Categories</Text>}
             
              />
     </View>
     </View>

    )
}

const styles = StyleSheet.create({

    imageView: {
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginBottom:SCREEN_WIDTH*0.035,
        marginRight:SCREEN_WIDTH*0.035,

    },
    image: {
         height:SCREEN_WIDTH*0.4475,
         width:SCREEN_WIDTH*0.4475,
         borderRadius:10
    },
    listHeader:{
        fontSize:100,
        fontWeight:'bold',
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:12
    },
    textView:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(52,52,52, 0.3)'
    }
})