import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 , FontAwesome} from '@expo/vector-icons';
import { Image , StyleSheet  } from "react-native";
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider
} from 'native-base';
import { marginTop } from 'styled-system';



function TrackInfo(props) {

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

    function trackInfo()
    {
	    
    }

  return (
    <NativeBaseProvider>
        <VStack  style={styles.shadowProp}>
       <Heading bg="#0FC1A7" size="lg"  style={{color: '#FFFFFF',fontFamily:'semibold',fontSize:31,textAlign: 'center',  paddingTop:'10%'}}>
       Tracking Information
        
        </Heading>
    
        <Heading size="md"  style={{color: 'black',fontFamily:'Pacifico_400Regular',textAlign: 'center'}}>
        <br></br>  
        <i></i>
         Order ID
        </Heading>
        <br></br>     
        <VStack space={2} style={{color: 'White', paddingLeft:'10%',paddingRight:'10%'}}>                     
                    <Input  
                    Icon='lock'
                    variant="filled"
                    textAlign="center"
                    placeholder="OD 1001"
                    placeholderTextColor='black'
                    fontSize='20'
                    fontFamily="Pacifico_400Regular"
                    isDisabled              
                />
        </VStack>
        <Heading size="md"  style={{color: 'black',fontFamily:'Pacifico_400Regular',textAlign: 'center'}}>
        <br></br>
         Name
        </Heading>
        <br></br>     
        <VStack space={2} style={{color: 'White',paddingLeft:'10%',paddingRight:'10%'}}>                     
                    <Input  
                    variant="filled"
                    textAlign="center"
                    placeholder="Stefania Crishani"
                    placeholderTextColor='black'
                    fontSize='20'
                    fontFamily="Pacifico_400Regular"
                    isDisabled             
                />
        </VStack>
        <Heading size="md"  style={{color: 'black',fontFamily:'Pacifico_400Regular', textAlign: 'center'}}>
        <br></br>
         Address
        </Heading>
        <br></br>     
        <VStack space={2} style={{color: 'White', paddingLeft:'10%',paddingRight:'10%'}}>                     
                    <Input  
                    variant="filled"  
                    textAlign="center"
                    placeholder="Colombo Sri Lanka"
                    placeholderTextColor='black'
                    fontSize='20'
                    fontFamily="Pacifico_400Regular"
                    isDisabled       
                />
        </VStack>
        <Heading size="md"  style={{color: 'black',fontFamily:'Pacifico_400Regular', textAlign: 'center'}}>
        <br></br>
         Phone Number
        </Heading>
        <br></br>     
        <VStack space={2} style={{color: 'White', paddingLeft:'10%',paddingRight:'10%'}}>                     
                    <Input  
                    variant="filled" 
                    textAlign="center"
                    placeholder="+94 7734562"
                    placeholderTextColor='black'
                    fontSize='20'
                    fontFamily="Pacifico_400Regular"
                    isDisabled                                 
                />
        </VStack>

        </VStack>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
 
    shadowProp: {
      // shadowColor: '#171717',
      // shadowOffset: {width: -2, height: 4},
      // shadowOpacity: 0.2,
      // shadowRadius: 3,
      height:'100%',
      backgroundColor:'#0FC1A7',
      // borderRadius:'16px',
      // borderColor:'#0FC1A7'
    },
    
  });

export default TrackInfo;