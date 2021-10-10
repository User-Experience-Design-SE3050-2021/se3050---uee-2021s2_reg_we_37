import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable} from 'react-native';
import { createStackNavigator, createAppContainer, withOrientation } from 'react-navigation';
import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';
import { Appbar } from 'react-native-paper';

import plus from '../assets/plus.png'
import order from '../assets/order.jfif'


function  OrderView(props){
    const _goBack = () => props.navigation.navigate('Orders');
    return (
        <View>
            <Appbar.Header  style={{backgroundColor:'#0FC1A7'}}>
                <Appbar.BackAction onPress={_goBack}/>
                <Appbar.Content title="Orders"/>
            </Appbar.Header>
        <View style={styles.container}>
            <Row>
                <Col style={{paddingTop:25, fontFamily: "Pacifico_400Regular", fontSize:30}}>Order : HN00023</Col>
            </Row>
            <Row>
                <Col>Date : 20 July 2021</Col>
            </Row>

            <Row style={{ marginTop: 30}}>
                <Table dataSource={[
                    {
                        id: 1,
                        name: 'Panadol',
                        quantity: '5 cards',
                        price: '50.00',
                        total: '250.00'
                    },
                    {
                        id: 2,
                        name: 'DeepHeat',
                        quantity: '2 tubes',
                        price: '700.00',
                        total: '1400.00'
                    },
                    {
                        id: 3,
                        name: 'Vitamin C',
                        quantity: '5 cards',
                        price: '50.00',
                        total: '150.00'
                    },
                    {
                        id: 4,
                        name: 'Vitamin E',
                        quantity: '3 cards',
                        price: '100.00',
                        total: '300.00'
                    }
                ]}
                pagination={false}
                >
                <Table.Column title="Medicine" dataIndex='name' />
                <Table.Column title="Quantity" dataIndex='quantity' />
                <Table.Column title="Price" dataIndex='price' />
                <Table.Column title="Total" dataIndex='total' />
                </Table>
            </Row>


            <Row style={{ marginTop:30,marginLeft: 150,fontFamily: "Pacifico_400Regular"}}>
                <Col>Toatl Amount : 2100.00</Col>
            </Row>
            <Row style={{marginTop:5,marginLeft: 140,fontFamily: "Pacifico_400Regular"}}>
                <Col>Delivery Charge : 400.00</Col>
            </Row>
            <Row style={{marginTop:5,marginLeft: 95,fontFamily: "Pacifico_400Regular"}}>
                <Col>Total Payable Amount : 2500.00</Col>
            </Row>
            <Row style={{marginTop:20,marginLeft: 180,color:'#0FC1A7',fontFamily: "Pacifico_400Regular"}}>
                <Col>Status: Delivered</Col>
            </Row>

            <Pressable style={styles.btn}  onPress={() => props.navigation.navigate('')}>
                <Text style={styles.btntxt}>Pay</Text>
            </Pressable>
        </View>
    </View>
    )
  }



const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20
    },
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        height:45,
        width:290,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#0FC1A7',
        marginTop:30,
        
    },
    btntxt:{
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
  });

  export default OrderView;