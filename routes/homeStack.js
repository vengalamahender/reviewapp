import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import DetailReview from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";

const screens = {
    Home:{
        screen:Home,  
        navigationOptions:({navigation}) =>{
           return {
                headerTitle:() => <Header navigation={navigation} title='GameZone' />
            }  
        }    
    },
    ReviewDetail:{
        screen:DetailReview,       
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee',height:60}
    }
})

export default HomeStack;