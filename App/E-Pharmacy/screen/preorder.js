import React from "react"
import {  Input, Stack, Center, Heading, Button, NativeBaseProvider,StyleSheet, SearchIcon, Box, FlatList, IconButton, Icon, View} from "native-base"
import { Entypo,FontAwesome } from "@expo/vector-icons"

export const OngoingOrderHeading = () => {
  return (
    <Stack space={3} w="100%" paddingRight= {10} paddingLeft= {10} paddingTop={2}>
      <Center>
        <Heading size="md">Ongoing Orders</Heading>
      </Center>
      <View>

      <Input
        variant="filled"
        placeholder="Search Orders"
        _light={{
          placeholderTextColor: "blueGray.400",
        }}
        _dark={{
          placeholderTextColor: "blueGray.50",
        }}
        
      />
       </View>
    </Stack>
  )
}

export const InCompleteOrderItem = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb88ba",
      line1: "2021.11.23",
      line2: "Pending",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa77f63",
      line1: "2021.11.03",
      line2: "Pending",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e99d72",
      line1: "2021.11.12",
      line2: "Pending",
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
        <Box px={5} py={6} rounded="lg" my={3} shadow={5} border={"#DF121E"} > 
          {/* {item.line1} */}
          <Box>
          {item.line1}
          </Box>
          <Box  alignSelf= 'flex-end'
          position= 'absolute'
          // bottom= {3}
          border={"#DF121E"} 
          backgroundColor={'#DF121E'}
          padding={1}
          rounded="lg"
          >
          {/* <Box flexDirection="row" justifyContent="flex-end"   position='center' background={"#DF121E"} > */}
          {item.line2}
          </Box>
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

export const OrderButtons = (props) => {
  return (
    <Button colorScheme="teal" mx={5} rounded="lg" shadow={5} border={"#424242"} style={{
      backgroundColor: '#0FC1A7',
      border: '#000',
      color: 'white',
    }}
    onPress={()=>props.navigation.navigate("PreOrder")}
    >
      Completed
    </Button>
    )
}
export const Example3 = () => {
    return (
      <Stack space={3} w="100%" paddingRight= {10} paddingLeft= {10} paddingTop={2}>
        <View style={{ flexDirection: 'row' }}>
        </View>
        <Center>
        </Center>
        <Input
          variant="filled"
          placeholder="Search orders"
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
  
  export const AddItemButton = () => {
    return (
      <IconButton alignContent="bottom" 
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
         backgroundColor: "#DF121E"
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
    )
  }
export default (props) => {
  return (
    <NativeBaseProvider>
      <Box backgroundColor="#0FC1A7">
      <FontAwesome.Button name="arrow-right" backgroundColor="#0FC1A7" onPress={()=>props.navigation.navigate("PostOrder")}
      style={{
        backgroundColor: '#0FC1A7',
        border: '#FFFCFC',
        color: 'white',
        marginLeft: 90,
      }}>
        Check completed orders
      </FontAwesome.Button>
      </Box>  
      <OngoingOrderHeading />
      <Center flex={1}>
      <InCompleteOrderItem/> 
      </Center>
      <AddItemButton/>
    </NativeBaseProvider>
  )
}
