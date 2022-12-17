import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Center, useTheme } from 'native-base';
import { Gradient } from './Gradient';

type Props ={
    children: React.ReactNode
    isGradient?: boolean
}

export function GradientSquareButton ({isGradient = false , children} : Props){
    
    const {colors} = useTheme()

    return(

        <TouchableOpacity>
            
            <Center shadow= '5'
            w='46px'
            borderRadius='10px'
            padding={2}
            h='46px'
            bg='primary.50:alpha.9' >
                {isGradient ?
                <Gradient>{children}</Gradient>:children}     
            </Center>
        </TouchableOpacity>

    )
}
