import React from 'react';
import {Text,View,Image, TextInput, Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import AntIcon from "react-native-vector-icons/AntDesign";
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

export default class Login extends React.Component{
    

    render(){
        const {navigate} = this.props.navigation
        const onPressHandler = () => {
            Alert.alert('Warning','Succesfully Added!',[
                {text:'OK'}
            ])
        }
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../assets/card.png')}
                    style={{width:"85%",height:"30%", marginTop:'5%',marginLeft:'13%'}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:'-5%'
                 }}
                ><b>Payment</b></Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Now you can do your payment using credit card easily.
                </Text>
                <Text style={{
                        color:"black",
                        fontFamily:"SemiBold",
                        marginHorizontal:55,
                        marginTop:15,
                        paddingHorizontal:10
                    }}><b>Card Number</b></Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="idcard" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <Text style={{
                        color:"black",
                        fontFamily:"SemiBold",
                        marginHorizontal:55,
                        marginTop:15,
                        paddingHorizontal:10
                    }}><b>CVC</b></Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    
                    <Icon name="creditcard" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <Text style={{
                        color:"black",
                        fontFamily:"SemiBold",
                        marginHorizontal:55,
                        marginTop:15,
                        paddingHorizontal:10
                    }}><b>Expiry Date</b></Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    
                    <Icon name="calendar" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <Text style={{
                        color:"black",
                        fontFamily:"SemiBold",
                        marginHorizontal:55,
                        marginTop:15,
                        paddingHorizontal:10
                    }}><b>Amount</b></Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    
                    <Icon name="wallet" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text onPress={()=>navigate('DeleveryMain')}
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Pay Now</Text>
                </View>
                {/* <Text 
                
                
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>New User</Text> */}
            </View>
        )
    }
}