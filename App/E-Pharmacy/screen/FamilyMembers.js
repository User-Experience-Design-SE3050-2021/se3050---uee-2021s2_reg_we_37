import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 , FontAwesome} from '@expo/vector-icons';
import { ImageBackground , StyleSheet  } from "react-native";
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

const image = { uri: "https://i.imgur.com/EDK8vCI.png" };


function FamilyMembers(props) {

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

    function family()
    {
	    
    }

    function AddFamilyMember()
    {
      props.navigation.navigate(AddFamilyMember);
    }

  return (
      <NativeBaseProvider>
       <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, justifyContent: "center", width: "100%"}}>
       <Heading size="lg"  style={{color: 'white',fontFamily:'semibold',fontSize:31, textAlign: 'center',   paddingBottom:'30%'}}>
          
          My Family Members
        </Heading>
      <Box
        safeArea
        pt={5}
        w="90%"
        mx='auto'
        borderWidth="3"
        style={styles.shadowProp}
      >
        <Heading size="lg"  style={{color: 'black', textAlign: 'center', fontFamily:'Pacifico_400Regular',   paddingBottom:'10%'}}>
          My Details
        </Heading>
      </Box>
       <Box
        safeArea
        pt={5}
        w="90%"
        mx='auto'
          borderWidth="3"
        mt={5}
        style={styles.shadowProp}
      >
        <Heading size="lg"  style={{color: 'black', textAlign: 'center',  fontFamily:'Pacifico_400Regular',  paddingBottom:'10%'}}>
         Father
        </Heading>
      </Box>
              <Box
        safeArea
        pt={5}
        w="90%"
        mx='auto'
        mt={5}
        mb={5}
          borderWidth="3"
        style={styles.shadowProp}
      >
        <Heading size="lg"  style={{color: 'black', textAlign: 'center',  fontFamily:'Pacifico_400Regular',  paddingBottom:'10%'}}>
          Mother
        </Heading>
      </Box>
            <Box
        safeArea
        pt={5}
        w="90%"
        mx='auto'
        mt={5}
        mb={5}
      >
       <Button  ml={1} mr={1}   bg="#0FC1A7" onPress={AddFamilyMember}  _text={{color: 'white' }}>
              Add Family Member
        </Button>
        </Box>
      </ImageBackground>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
 
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#F5F5F5', 
    borderRadius:'16px',
    borderColor:'#0FC1A7'
  },
});

export default FamilyMembers;