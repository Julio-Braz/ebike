import React from "react";
import { Box, Icon, Text } from "native-base";
import { SquareButton } from "../atoms/SquareButton";
import {AntDesign} from '@expo/vector-icons';


type Props = {
    text: string
}
export function Header ({text}: Props){
    return(
        <Box h='100px' alignItems='center' mt='26' flexDirection='row' justifyContent='space-between'>
            <Text fontSize='lg' fontWeight='bold' color='#fff' >{text}</Text>
            <SquareButton>
                <Icon as={AntDesign} name='search1' color='white' />
            </SquareButton>
        </Box>
    )
}