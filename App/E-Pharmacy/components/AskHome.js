import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable} from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

import ask from '../assets/ask.jpg'

function AskHome(props) {

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
        <View style={styles.container}>
        
            <Text style = {styles.name}>Hey Abarna!</Text>

            <Image
                style={styles.image}
                source={ask}
            />

            <Text style = {styles.qoute}>You can ask questions related to OUR SERVICE, MEDICINE, ORDERS, PAYMENT and DELIVERY. And also you can get ADVICE from doctors.</Text>

            <Pressable style={styles.btn}  onPress={() => props.navigation.navigate('AskQuestions')}>
                <Text style={styles.btntxt}>GET STARTED</Text>
            </Pressable>
           
        </View>

    )
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        width: 350,
        height: 250,
        paddingTop: 40,
        borderRadius:5,
        marginTop:30
    },
    name:{
        paddingTop:30,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:35,
        fontFamily: "Pacifico_400Regular"
    },
    qoute:{
        paddingTop:20,
        paddingBottom:40,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:20,
        fontWeight: 'bold'
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        height:47,
        width:267,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#0FC1A7',
        marginBottom:20
    },
    btntxt:{
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
  });
  export default AskHome;