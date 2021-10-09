import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 , FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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



function DeliveryDashboard(props) {

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

    function deliveryDashboard()
    {
	    
    }

    function TrackOrder()
    {
      props.navigation.navigate(TrackOrder);
    }
    function TrackInfo()
    {
      props.navigation.navigate(TrackInfo);
    }

 

  return (
    <NativeBaseProvider>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.imgur.com/bEhktVq.png',
        }}
      />
       <Heading size="lg"  style={{color: '#434343',fontSize:25,fontFamily: "Pacifico_400Regular",textAlign: 'center', paddingTop:'5%'}}>
          <b>Get  Your Parcel Safely</b>
        </Heading>
        <Image
        style={styles.tinyLogo2}
        source={{
          uri: 'https://i.imgur.com/Uq68fNA.png',
        }}
      />
        <VStack space={2}>
              <Text fontSize="md" mr={5} ml={5} style={{color: "#707070", fontFamily:'SemiBold',textTransform:"capitalize", textAlign:"center"}}>E- Pharmarcy is the place where you can buy your medicine and delivery it to your door step more safely.</Text>
        </VStack>
        <VStack  space={2} style={{marginLeft:'35%', marginRight:'35%', marginTop:"8%"}}>
          <Button    bg="#0FC1A7" fontSize="xs" _text={{color: 'white' }} onPress={TrackOrder}>
            Track Order          
          </Button> 
          <Button  mt={2}  bg="#0FC1A7" fontSize="xs" onPress={TrackInfo} _text={{color: 'white' }}>
          Track Infor        
          </Button>
        </VStack>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
 
  tinyLogo: {
    width: 50,
    height: 50,
    marginTop: "5%",
    marginBotom: "5%",
    marginLeft:'43%',
  }, tinyLogo2: {
    width: 170,
    height: 170,
    marginTop: "5%",
    marginBotom: "5%",
    marginLeft:'26%',
  },
});

export default DeliveryDashboard;