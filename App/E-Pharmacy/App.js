import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AskQuestions from './components/AskQuestions';
import ChatHome from './components/ChatHome';
import Feedback from './components/Feedback';
import UploadImage from './components/Upload Image';
import TypePrescription from './components/TypePrescription';
import OrderHome from './components/OrderHome';
import Orders from './components/Orders';
import AskHome from './components/AskHome';
import OrderView from './components/OrderView';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ChatHome">
        <Stack.Screen name="Welcome" component={ChatHome}/>
        <Stack.Screen name="OrderHome" component={OrderHome}/>
        <Stack.Screen name="UploadImage" component={UploadImage}/>
        <Stack.Screen name="TypePrescription" component={TypePrescription}/>
        <Stack.Screen name="Feedback" component={Feedback}/>
        <Stack.Screen name="AskQuestions" component={AskQuestions}/>
        <Stack.Screen name="Orders" component={Orders}/>
        <Stack.Screen name="AskHome" component={AskHome}/>
        <Stack.Screen name="OrderView" component={OrderView}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}