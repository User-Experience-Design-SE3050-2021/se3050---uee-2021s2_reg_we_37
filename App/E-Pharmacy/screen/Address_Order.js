import React from "react";
import { Button, Center, NativeBaseProvider, Box, Image, View } from "native-base"

function Buttons_navigate(props) {
  return (
        <NativeBaseProvider>
            <Box  px={5} py={6} rounded="lg" my={3} shadow={5}>
            <Box> 
        <View>
        <Image resizeMode="half"  source={require('../assets/freestocks-nss2eRzQwgw-unsplash.jpg')} style= {{
      width: null,
      height: 250,
      resizeMode: 'stretch',
    }}
    >
      </Image > 
                <Button  
                    style={{
                        backgroundColor: '#0FC1A7',
                        color: 'white'
                    }}
                    onPress={()=>props.navigation.navigate("PreOrder")}>Order State</Button>
       </View>
           
            </Box>
            </Box>
            <Box  px={5} py={6} rounded="lg" my={3} shadow={5}>
            <Box> 
        <View>
        <Image resizeMode="half"  source={require('../assets/henry-perks-BJXAxQ1L7dI-unsplash.jpg')} style= {{
      width: null,
      height: 250,
      resizeMode: 'stretch',
    }}
    >
      </Image > 
      <Button  
            style={{
                backgroundColor: '#0FC1A7',
                color: 'white',
            }}
            onPress={()=>props.navigation.navigate("Address")}>Address</Button>
    </View>

            </Box>
            </Box>
        </NativeBaseProvider>
        
  );
}

export default Buttons_navigate;