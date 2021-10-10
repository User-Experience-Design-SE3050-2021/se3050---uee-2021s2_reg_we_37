import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable} from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

import pills from '../assets/pills.jpg'
import { Appbar } from 'react-native-paper';

function OrderHome(props) {

    const _goBack = () => props.navigation.navigate('Welcome');

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return (

        <View>
            <Appbar.Header  style={{backgroundColor:'#0FC1A7'}}>
                <Appbar.BackAction onPress={_goBack}/>
                <Appbar.Content title="New Order"/>
            </Appbar.Header>
        <View style={styles.container}>

        <Image
            style={styles.image}
            source={pills}
        />

            <Text style = {styles.name}>Hey Abarna!</Text>
            <Text style = {styles.qoute}>To get started,can you please select the order type</Text>

            <Pressable style={styles.btn}  onPress={() => props.navigation.navigate('UploadImage')}>
                <Text style={styles.btntxt}>Uploading Image</Text>
            </Pressable>

            <Pressable style={styles.btn}  onPress={() => props.navigation.navigate('TypePrescription')}>
                <Text style={styles.btntxt}>Type Prescription</Text>
            </Pressable>
           
        </View>
        </View>

    )
  }

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        width: 300,
        height: 230,
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
  export default OrderHome;