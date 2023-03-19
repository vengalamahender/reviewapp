import React from "react";
import { StyleSheet,View,Text, Button,TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";


export default function ReviewFrom({addReview}) {
    return(
        <View style={globalStyles.container}>
        <Formik
          initialValues={{ title: '', body: '', rating: '' }}
          onSubmit={(values,actions) => {
            console.log(values);
            actions.resetForm();
            addReview(values)
          }}
        >
          {props => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Review title'
                onChangeText={props.handleChange('title')}
                value={props.values.title}
              />
  
              <TextInput
                style={globalStyles.input}
                multiline
                placeholder='Review details'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
              />
  
              <TextInput 
                style={globalStyles.input}
                placeholder='Rating (1 - 5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType='numeric'
              />
              
              <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
            </View>
          )}
        </Formik>
      </View>
    )
}
