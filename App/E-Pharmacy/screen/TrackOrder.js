import * as React from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 , FontAwesome} from '@expo/vector-icons';
import { ImageBackground , StyleSheet  } from "react-native";

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

 const image = { uri: "https://i.imgur.com/RuwMMwH.png"};


function TrackOrder(props) {

    function login()
    {
	    
    }

 

  return (
      <NativeBaseProvider>
       <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, justifyContent: "center", width: "100%"}}>
       <Heading size="lg"  style={{color: 'white',fontFamily:'semibold',fontSize:31, textAlign: 'center', marginTop:'-22%'}}>
               Track Your Parcel   
                        
       </Heading>
                <VStack space={2} style={{marginTop:'3%'}} >
                    <Text fontSize="md" mr={5} ml={5} style={{color: "white",textTransform:"capitalize", textAlign:"center"}}>E- Pharmarcy Delivery means less worrying about packages being stolen from your porch. Simply request to redirect a package to a secure location.</Text>
                    <br></br>
                </VStack>               
                <VStack space={2} style={{marginTop:'8%'}} marginLeft='15%' marginRight='15%'>                
                    <Input
                    variant="filled"
                    placeholder="Search By Order Number"
                    _light={{
                    placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                    placeholderTextColor: "blueGray.50",
                    }}
                
                />
         </VStack>      
           
        <VStack space={2} >   
         <Heading size="lg"  style={{color: 'black',marginTop:'8%',  paddingLeft:'5%'}}>
         <br></br>
          Delivery Status
        </Heading>
        </VStack>
        <br></br>
      <Box
        safeArea
        pt={2}
        w="90%"
        mx='auto'
        borderWidth="3"
        style={styles.shadowProp}
      >
  
        <Heading size="md"  style={{color: 'black',textAlign: 'left', paddingLeft:'5%', paddingBottom:'5%'}}>
          OD 1001
        </Heading>
        <Box
        safeArea
        pt={1}
        w="40%"      
        mx='auto'
        borderWidth="3"
        style={styles.shadow}
      >
        <label size="lg"  style={{color: 'white', textAlign: 'left', paddingLeft:'20%', paddingBottom:'5%'}}>Completed</label>
        </Box>

      </Box>
       <Box
        safeArea
        pt={2}
        w="90%"
        mx='auto'
          borderWidth="3"
        mt={5}
        style={styles.shadowProp}
      >
        <Heading size="md"  style={{color: 'black',textAlign: 'left', paddingLeft:'5%', paddingBottom:'5%'}}>
         OD 1002
        </Heading>
        <Box
        safeArea
        pt={1}
        w="40%"
        mx='auto'
        borderWidth="3"
        style={styles.shadow2}
      >
        <label size="lg"  style={{color: 'white', textAlign: 'left', paddingLeft:'20%', paddingBottom:'5%'}}>Processing</label>
        </Box>
      </Box>
              <Box
        safeArea
        pt={2}
        w="90%"
        mx='auto'
        mt={5}
        mb={5}
          borderWidth="3"
        style={styles.shadowProp}
      >
        <Heading size="md"  style={{color: 'black',textAlign: 'left',  paddingLeft:'5%', paddingBottom:'5%'}}>
          OD 1003
        </Heading>
        <Box
        safeArea
        pt={1}
        w="40%"
        mx='auto'
        borderWidth="3"
        style={styles.shadow}
      >
        <label size="lg"  style={{color: 'white', textAlign: 'left', paddingLeft:'20%', paddingBottom:'5%'}}>Completed</label>
        </Box>
      </Box>
  
      </ImageBackground>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
 
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#F5F5F5', 
    borderRadius:'16px',
    borderColor:'#0FC1A7',
    height:'10%',
    marginTop:'6%'
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#DC143C', 
    borderRadius:'16px',
    borderColor:'#DC143C',
    marginTop:'-12%',
    marginRight:'5%'
    
  },
  shadow2: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#0FC1A7', 
    borderRadius:'16px',
    borderColor:'#0FC1A7',
    marginTop:'-12%',
    marginRight:'5%'
  },
});
// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   itemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap'
//   },
//   square: {
//     width: 24,
//     height: 24,
//     backgroundColor: '#55BCF6',
//     opacity: 0.4,
//     borderRadius: 5,
//     marginRight: 15,
//   },
//   itemText: {
//     maxWidth: '80%',
//   },
//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: '#55BCF6',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
// });

export default TrackOrder;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity ,ImageBackground} from 'react-native';

// const Task = (props) => {

//   return (
//     <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, justifyContent: "center", width: "100%"}}>
         
//     <View style={styles.item}>
 
//       <View style={styles.itemLeft}>
//         <View style={styles.square}></View>
//         <Text style={styles.itemText}>{props.text}</Text>
//       </View>
//       <View style={styles.circular}></View>
//     </View>
//     </ImageBackground>
//   )
// }


// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   itemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap'
//   },
//   square: {
//     width: 24,
//     height: 24,
//     backgroundColor: '#55BCF6',
//     opacity: 0.4,
//     borderRadius: 5,
//     marginRight: 15,
//   },
//   itemText: {
//     maxWidth: '80%',
//   },
//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: '#55BCF6',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
// });

// export default Task;
