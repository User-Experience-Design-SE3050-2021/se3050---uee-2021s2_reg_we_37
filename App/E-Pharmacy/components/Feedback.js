import React, { Component } from 'react';
import { Button, View, Text,TextInput, Image,Picker,  StyleSheet, Pressable} from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

import feedback from '../assets/feedback.jpg'

class Feedback extends Component {

    state = {  
        choosenIndex: 0  
    };  
    render() {
    return (
        <View style={styles.container}>

            <Text style = {styles.name}>It's feedback time</Text>
        
            <Image
                style={styles.image}
                source={feedback}
            />

            <Text style = {styles.qoute}>We value your feedbacks as you. Please share your experience with us.</Text>


            <Picker style={styles.pickerStyle}  
                    selectedValue={this.state.language}  
                    itemStyle={{ backgroundColor: "#FBFDFD", color: "blue", fontFamily:"Ebrima", fontSize:17}}
                    onValueChange={(itemValue, itemPosition) =>  
                    this.setState({language: itemValue, choosenIndex: itemPosition})} >  
                    <Picker.Item label="Feedback Type" value="ft" />  
                    <Picker.Item label="Uploading Prescription" value="up" />
                    <Picker.Item label="Type Prescription" value="tp" />  
                    <Picker.Item label="Ask question" value="aq" />  
            </Picker>  
           
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Please type your feedback here"
                placeholderTextColor="black"
                numberOfLines={10}
                multiline={true}
                />

            <Pressable style={styles.btn} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.btntxt}>Submit</Text>
            </Pressable>
        </View>

    )
  }
}
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    name:{
        paddingTop:20,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:33,
        fontFamily: "Pacifico_400Regular"
    },
    qoute:{
        paddingBottom:25,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:15,
        fontWeight: 'bold'
    },
    image: {
        width: 350,
        height: 200,
        paddingTop: 20,
        borderRadius:10,
        marginTop:20,
        marginBottom:20
    },
    textStyle:{  
        paddingRight: 100,  
        fontSize: 25,    
    }, 
    textArea:{
        height: 107,  
        width: 267,  
        borderRadius:15,
        borderColor:'#344953',
        borderWidth : 1.0,
        paddingTop:10,
        textAlign: 'center',
        marginBottom:25,
    },  
    pickerStyle:{  
        height: 47,  
        width: 267,  
        color: '#344953', 
        borderRadius:15,
        marginBottom:20,
        paddingLeft:5
    }, 
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        height:47,
        width:267,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#0FC1A7',
        marginTop:20
    },
    btntxt:{
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
  });

  export default Feedback;