import React from "react";
import { View,Text,Image} from "react-native";
import { globalStyles,images } from "../styles/global";
import Card from "../shared/card";

export default function DetailReview({navigation}){
    const rating = navigation.getParam('rating');
    return(        
            <View style={globalStyles.container}>
                <Card>
                    <Text>{navigation.getParam('title')}</Text>
                    <Text>{navigation.getParam('body')}</Text>
                    <View>
                        <Text>GameZone Rating:{navigation.getParam('rating')}</Text>
                        <Image source={images.ratings[rating]} />
                        
                    </View>
                    
                </Card>
            </View>       
    )
}

