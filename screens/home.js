import React, { useState } from "react";
import { TouchableOpacity ,Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FlatList } from "react-native";
import { View,Text } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import {MaterialIcons} from '@expo/vector-icons'; 
import ReviewFrom from "./reviewForm";

export default function Home({navigation}){
    const [openModal,setopenModal] = useState(false);
    const [reviews,setReviews] = useState([
        {title:'Zelda,Breath of fresh air',rating:5,body:'lorem ipsum',key:'1'},
        {title:'Gotta Catch Them All(again)',rating:4,body:'lorem ipsum',key:'2'},
        {title:'Not So "Final" Fantasy',rating:3,body:'lorem ipsum',key:'3'},        
    ])
    const onpressHandler = () =>{
        navigation.navigate('ReviewDetail')
    }
    const addReview = (review) => {
        review.key =  Math.random().toString();
        setReviews((currentReviews) => {
            return [review,...currentReviews]
        })
        setopenModal(false);
    }
    return(
        <View style={globalStyles.container}>
            <Modal visible={openModal} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <MaterialIcons name='close' size={24} onPress={() => setopenModal(false)}/>
                    <p>Check</p>
                    <ReviewFrom addReview={addReview} />
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name='add' size={24} onPress={() => setopenModal(true)} />
            {/* <Text style={globalStyles.titleText}>Home Page</Text>
            <Button title="goto review details" onPress={onpressHandler} /> */}
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail',item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
             />
        </View>
    )
}

