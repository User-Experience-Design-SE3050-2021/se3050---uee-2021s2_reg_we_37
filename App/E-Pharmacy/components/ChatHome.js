import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable, ViewBase} from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Appbar } from 'react-native-paper';

import common from '../assets/common.jpg'

function ChatHome(props) {
    

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }

      

    return (
        
        <View>
            <Appbar.Header  style={{backgroundColor:'#0FC1A7'}}>
                <Appbar.Action  icon="menu"/>
                <Appbar.Content title="Welcome"/>
            </Appbar.Header>
        <View style={styles.container}>

        
            <Text style = {styles.name}>Welcome Abarna!</Text>

            <Image
            style={styles.image}
            source={common}
            />

            <Text style = {styles.qoute}>What do you what to do?</Text>

            <Pressable style={styles.btn} onPress={() => props.navigation.navigate('OrderHome')}>
                <Text style={styles.btntxt}>New Order</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => props.navigation.navigate('Orders')}>
                <Text style={styles.btntxt}>Ongoing Order</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => props.navigation.navigate('AskHome')}>
                <Text style={styles.btntxt}>Ask Questions</Text>
            </Pressable>
         
            <Pressable style={styles.btn} onPress={() => props.navigation.navigate('Feedback')}>
                <Text style={styles.btntxt}>Feedback</Text>
            </Pressable>
           
        </View>
        </View>

    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    appbar:{
        justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0FC1A7',
      height: '10%',
      width: '100%',
    },
    image: {
        width: 300,
        height: 250,
        paddingTop: 40,
        borderRadius:5,
        marginTop:30
    },
    name:{
        paddingTop:30,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:30,
        fontFamily: "Pacifico_400Regular"
    },
    qoute:{
        paddingTop:20,
        paddingBottom:30,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:18,
        fontWeight: 'bold'
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        height:40,
        width:265,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#0FC1A7',
        marginBottom:17
    },
    btntxt:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
  });
  
  export default ChatHome;