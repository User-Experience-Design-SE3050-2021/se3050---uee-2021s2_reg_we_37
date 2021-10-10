
import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import AntIcon from "react-native-vector-icons/AntDesign";
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

export default class Login extends React.Component{

    render(){
        
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Text
                 style={{
                     fontSize:30,
                     
                     alignSelf:"center",
                     marginTop:'10%'
                     
                 }}
                ><b>Add Family Member</b></Text>

                <Text
                style={{
                   
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Now you can add your loved onces easily.When you set up Family Sharing, family members can share purchases, subscriptions, their location, and more without sharing accounts.
                </Text>
                <View style={{backgroundColor:"#FFF",marginTop:"5%"}}>
                <Text style={{
                        color:"black",
                        fontFamily:'SemiBold',
                        marginHorizontal:55,
                        marginTop:25,
                        paddingHorizontal:10
                    }}><b>Relationship</b></Text>
                    
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
                    <Icon name="team" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <Text style={{
                        color:"black",
                        fontFamily:'SemiBold',
                        marginHorizontal:55,
                        marginTop:15,
                        paddingHorizontal:10
                    }}><b>Name</b></Text>
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
                    
                    <Icon name="user" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <Text style={{
                        color:"black",
                        fontFamily:'SemiBold',
                        marginHorizontal:55,
                        marginTop:15,
                        paddingHorizontal:10
                    }}><b>Date of Birth</b></Text>
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
                        fontFamily:'SemiBold',
                        marginHorizontal:55,
                        marginTop:15,
                        paddingHorizontal:10
                    }}><b>Medical History</b></Text>
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
                    
                    <Icon name="medicinebox" color="#00716F" size={24}/>
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
                    <Text  onPress={()=>navigate('FamilyMembers')}
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Save</Text>
                </View>
                {/* <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>New User</Text> */}
                </View>
            </View>
        )
    }
}