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

//IT19387536
import FamilyMembers from './screen/FamilyMembers';
import Address from './screen/address';
import DeleveryMain from './screen/DeleveryMain';
import TrackOrder from './screen/TrackOrder';
import TrackInfo from './screen/TrackInfo';
import AddFamilyMember from './screen/AddFamilyMember';
import Payment from './components/Payment';

//IT19243672
//import address files
import Address from './screen/save_address';
import Search_Address from './screen/search_addresses';
//import order history files
import PreOrder from './screen/preorder';
import PostOrder from './screen/postorder';
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
          
        <Stack.Screen name="FamilyMembers" component={FamilyMembers} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="DeleveryMain" component={DeleveryMain} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
        <Stack.Screen name="AddFamilyMember" component={AddFamilyMember} />
        <Stack.Screen name="TrackInfo" component={TrackInfo} />
        <Stack.Screen name="Payment" component={Payment} />
          
          <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Tree" component={Tree} />
        <Stack.Screen name="Search_Address" component={Search_Address} />
        <Stack.Screen name="PreOrder" component={PreOrder} />
        <Stack.Screen name="PostOrder" component={PostOrder} />
       
      </Stack.Navigator>
   </NavigationContainer>
  );
}
