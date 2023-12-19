import { Box, Center, Image, Text, VStack } from "@chakra-ui/react"


const Setting = () => {
    return(
        <VStack alignItems='center' alignSelf={{base:'center', md:'auto'}}>
            <Text fontSize={{base:"18px",md:'30px'}} fontWeight='bold'>This page is under construction...</Text>
            <Image src={window.location.origin + '/UnderConstruction.png'} height='sm' w='sm' boxSize={{base: '60%', md: '40%'}}/>
        </VStack>
    )
}

export default Setting;