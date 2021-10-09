import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable} from 'react-native';
import { createStackNavigator, createAppContainer, withOrientation } from 'react-navigation';

import plus from '../assets/plus.png'
import order from '../assets/order.jfif'


function  Orders(props){

    return (
        <View style={styles.container}>

        <Text style = {styles.name}>Hey Abarna! Here your orders</Text>

            <Image
            style={styles.imaged}
            source={order}
            />

            <Pressable style={styles.btn} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.btntxt}>Order HN00023</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.btntxt}>Order HN00022</Text>
            </Pressable>
           
            <Pressable style={styles.btn2} onPress={() => props.navigation.navigate('OrderHome')}>
            <Image
            style={styles.image}
            source={plus}
        />
            </Pressable>

        </View>

    )
  }



const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:50
    },
    imaged: {
        width: 300,
        height: 200,
        marginBottom:50
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        height:47,
        width:290,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#0FC1A7',
        marginBottom:30,
        
    },
    name:{
        marginBottom: 20,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize:26,
        fontFamily: "Pacifico_400Regular"
    },
    btntxt:{
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    btn2:{
        alignItems: 'center',
        justifyContent: 'center',
        height:53,
        width:53,
        borderRadius: '100%',
        elevation: 3,
        backgroundColor: '#0FC1A7',
        marginTop:80,
        marginLeft:'60%'
    },
    image:{
        height:20,
        width:20
    }
  });

  export default Orders;