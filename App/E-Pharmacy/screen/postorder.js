import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { Input, Stack, Center, Heading, Button, NativeBaseProvider,StyleSheet, SearchIcon, Box, FlatList, IconButton, Icon} from "native-base"
import { Entypo, FontAwesome } from "@expo/vector-icons";
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
  )
}

export const OrderButtons = (props) => {
  return (
    <Button.Group paddingTop={50}
      variant="solid"
      isAttached
      space={6}
    //   shadow={2}
      mx={{
        base: "auto",
        md: 0,
      }}
    >
      <Button colorScheme="teal" mr={5} rounded="lg" shadow={5} border={"#424242"} style={{
        backgroundColor: '#0FC1A7',
        border: '#000',
        color: 'white',
      }}
      >
        OnGoing
      </Button>
      <Button
       style={{
        backgroundColor: '#0FC1A7',
        border: '#0FC1A7',
        color: 'white',
      }}
      >
        Completed
      </Button>
      <Center flex={1}>
                {/* <Button  
                    style={{
                        backgroundColor: '#0FC1A7',
                        color: 'white',
                    }}
                    onPress={()=>props.navigation.navigate("PreOrder")}>Order State</Button> */}
            </Center>
      {/* <Button onPress={()=>props.navigation.navigate("PreOrder")}>Order History</Button>
      <Button onPress={()=>props.navigation.navigate("PostOrder")}>PostOrder</Button> */}
    </Button.Group>
  )
}

export const PostOrder_heading_search = () => {
  return (
    <Stack space={3} w="100%" paddingRight= {10} paddingLeft= {10} paddingTop={2}>
      <Center>
        <Heading size="md">Completed Orders</Heading>
      </Center>
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
    </Stack>
  )
}

export const PostOrder_content = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb58ba",
      line1: "2021.04.23",
      line2: "Completed",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f83",
      line1: "2021.05.03",
      line2: "Completed",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d11",
      line1: "2020.12.28",
      line2: "Completed",
    }, 
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f03",
      line1: "2020.03.02",
      line2: "Completed",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d82",
      line1: "2020.01.23",
      line2: "Completed",
    },{
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      line1: "2020.01.29",
      line2: "Completed",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f03",
      line1: "2019.05.13",
      line2: "Completed",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d02",
      line1: "2019.12.28",
      line2: "Completed",
    }, 
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f01",
      line1: "2019.03.02",
      line2: "Completed",
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
      <Box px={5} py={6} rounded="lg" my={3} shadow={5} border={"#0FC1A7"} > 
      {/* {item.line1} */}
        <Box>
          {item.line1}
        </Box>
        <IconButton alignContent="bottom" 
        
          icon={<Icon as={Entypo} name="cross" size={3} style={{color: '#EBF5FB'}}/>}
          borderRadius="full"  padding={1} 
          style={{
            backgroundColor: 'red',
            border: 'red',
            alignSelf: 'flex-end',
            position: 'absolute',
            top: -10,
            right:-10,
          }}
          _hover={{
            backgroundColor: "#DF121E"
          }}
        />
        <Box
          style={{
            color: 'white',
          }}  
          alignSelf= 'flex-end'
          position= 'absolute'
          border={"#0FC1A7"} 
          backgroundColor={'#0FC1A7'}
          padding={1}
          rounded="lg"
        >
          {item.line2}
        </Box>
      </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

function addPostOrder(props) {
  return (
    <NativeBaseProvider>
       <Box backgroundColor="#0FC1A7">
      <FontAwesome.Button name="arrow-left" backgroundColor="#0FC1A7" onPress={()=>props.navigation.navigate("PreOrder")}
      style={{
        backgroundColor: '#0FC1A7',
        border: '#FFFCFC',
        color: 'white',
        marginLeft: 90,
      }}>
        Check Ongoing Orders
      </FontAwesome.Button>
      </Box>  
      <PostOrder_heading_search/> 
      <Center flex={1}>
        <PostOrder_content/> 
      </Center> 
      <AddItemButton/>
    </NativeBaseProvider>
    
  );
}
export default addPostOrder;