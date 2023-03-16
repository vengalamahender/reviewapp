import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet,View,Text,Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({navigation}){

    const [reviews,setReviews] = useState([
        {title:'Zelda,Breath of fresh air',rating:5,body:'lorem ipsum',key:'1'},
        {title:'Gotta Catch Them All(again)',rating:4,body:'lorem ipsum',key:'2'},
        {title:'Not So "Final" Fantasy',rating:3,body:'lorem ipsum',key:'3'},        
    ])
    const onpressHandler = () =>{
        navigation.navigate('ReviewDetail')
    }
    return(
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Page</Text>
            <Button title="goto review details" onPress={onpressHandler} /> */}
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail',item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
             />
        </View>
    )
}

