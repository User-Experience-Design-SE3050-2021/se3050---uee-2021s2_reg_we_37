import React from "react"
import { Image, Input, Stack, Center, Heading, Button, NativeBaseProvider,Icon, ImageBackground} from "native-base"
import { MaterialIcons} from "@expo/vector-icons"
const image = { uri: "https://reactjs.org/logo-og.png" };
export const Search_Address = () => {
  return (
    <Stack space={3} w="100%" paddingRight= {10} paddingLeft= {10} paddingBottom= {4} >
      
     <Center>
        <Heading size="md">Search Addresses</Heading>
      </Center>
      <Input
        variant="filled"
        placeholder="Search Addresses"
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

export default (props) => {
  return (
    <NativeBaseProvider>
    <Search_Address/> 
    <Image resizeMode="cover"  source={require('../assets/guilherme-stecanella-EefsBN5B5GE-unsplash.jpg')} style= {{
      width: null,
      height: 575,
      resizeMode: 'stretch',
    }}>
      </Image > 
    </NativeBaseProvider>
  )
}
