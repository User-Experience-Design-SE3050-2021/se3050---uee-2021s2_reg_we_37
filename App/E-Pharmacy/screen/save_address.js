
import React, {useState} from "react"
import { Input, Stack, Center, Heading, Button, NativeBaseProvider,StyleSheet, IconButton, Box, FlatList,Icon, Alert} from "native-base"
import { Entypo,FontAwesome} from "@expo/vector-icons";

export const Address_heading_searchbar = () => {

  return (
    <Stack space={3} w="100%" paddingRight= {10} paddingLeft= {10} paddingTop={2}>
      <Center>
        <Heading size="md">Saved Addresses</Heading>
      </Center>
      <Input
        variant="filled"
        placeholder="Search Saved Addresses"
        _light={{
          placeholderTextColor: "blueGray.400",
        }}
        _dark={{
          placeholderTextColor: "blueGray.50",
        }}
      />
    </Stack>
  )
}

export const Address_content = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2323",
      line1: "No 13,",
      line2: "Galle road,",
      line3: "Galle.",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd333a97f63",
      line1: "SLIIT,",
      line2: "Kaduvela Road,",
      line3: "Malabe.",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145573339d72",
      line1: "No 15,",
      line2: "Lake road,",
      line3: "Kandy.",
    },
  ]
  return (
    <FlatList
      paddingRight={35} 
      paddingLeft= {35} 
      paddingTop={3} 
      size={"xs"}
      data={data}
      renderItem={({ item }) => (
      <Box 
      px={5} py={2} rounded="md" my={2} shadow={5} border={"#0FC1A7"}
      style={{
        backgroundColor:'#FBFFFE',
      }}>
          {item.line1}
          {item.line2}
          {item.line3}
          <IconButton alignContent="bottom" 
            icon={<Icon as={Entypo} name="cross" size={3} style={{color: '#EBF5FB'}}/>}
            borderRadius="full" padding={1} 
            style={{
            backgroundColor: 'red',
            border: 'red',
            alignSelf: 'flex-end',
            position: 'absolute',
            top: -5,
            right: -5,
          }}

          _hover={{
            backgroundColor: "#000"
          }}
        />
         <Box
          alignSelf= 'flex-end'
          position= 'absolute'
        >
            <IconButton alignContent="bottom" 
              icon={<Icon as={Entypo} name="location" size={5} style={{color: '#0FC1A7'}}/>}
              borderRadius="full" padding={3} 
              style={{
              alignSelf: 'flex-end',
              position: 'absolute',
              top: 12,
              right: 35,
              }}

              _hover={{
              backgroundColor: "#000"
              }}
            />
          </Box>
        </Box>
        )}
        keyExtractor={(item) => item.id}
    />
  )
}
export default (props) => {  
  return (
    <NativeBaseProvider>
      <Address_heading_searchbar/>  
      <Center>
        <Address_content/>
      </Center>  
      <IconButton alignContent="bottom"
        onPress={()=>props.navigation.navigate("Search_Address")}   
        icon={<Icon as={Entypo} name="plus" size={5}  
      style={{
        color: 'white',
      }}
      />}
      borderRadius="full" padding={4}
      style={{
        backgroundColor: '#0FC1A7',
        border: '#FFFCFC',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        right:35,
      }}

      _hover={{
       backgroundColor: "#000"
      }}
      _pressed={{
        bg: "orange.600:alpha.20",
        _icon: {
          name: "plus",
        },
      }}
      _ios={{
        _icon: {
          size: "2xl",
        },
      }}
      />
    </NativeBaseProvider>
  )
}
