import { Box, Center, Image, Text, VStack } from "@chakra-ui/react"


const Setting = () => {
    return(
        <VStack alignItems='center' justifyContent='center'>
            <Text>This page is under construction...</Text>
            <Image src={window.location.origin + '/UnderConstruction.png'} height='sm' w='sm'/>
        </VStack>
    )
}

export default Setting;