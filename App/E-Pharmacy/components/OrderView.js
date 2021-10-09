import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable} from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';


function OrderView(props) {
    

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
        <View style={styles.container}>

            <Text style = {styles.name}>Detailed view of your order</Text>

            <Pressable style={styles.btn} onPress={() => props.navigation.navigate('')}>
                <Text style={styles.btntxt}>Pay</Text>
            </Pressable>

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
    name:{
        paddingTop:30,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:30,
        fontFamily: "Pacifico_400Regular"
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
  
  export default OrderView;