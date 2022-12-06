import { Box } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Card(){
 return(
 <TouchableOpacity style={{padding: 5, width: '50%', height: 240, opacity: 0.9}}
  onPress={()=> {}}>
    <Box borderRadius='20px'
     p='4' flex= '1' shadow='5' bg= 'primary.50:alpha.9'
     justifyContent='center'
     alignItems='center'
          >
            <Box>
                {/* <Image src={} width='121px' h='80px' alt='image' resizeMode='contain' />  */}
            </Box>
    </Box>
  </TouchableOpacity>
)}