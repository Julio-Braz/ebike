import { Box, HStack, Text, Image } from 'native-base';
import React from 'react';
import { GradientSquareButton } from '../atoms/GradientSquareButton';

import bike from '../../img/categories/subtract.png'
import road from '../../img/categories/road.png'
import helmet from '../../img/categories/helmet.png'
import mountain from '../../img/categories/mountain.png'


export function CategoryList (){
    return(
        <Box width='100%' mb='20px' mt='5px' alignSelf='center' justifyContent='space-between'>
            <HStack justifyContent='space-between' width='95px'>
                <Box ml='20px'>
                    <GradientSquareButton isGradient>
                        <Text color='white'>All</Text>
                    </GradientSquareButton>
                </Box>
                <Box ml='20px' mt='-10px'>
                
                    <GradientSquareButton isGradient= {false}>
                        <Image source={bike} alt='icon of a bike' resizeMode='contain'/>
                    </GradientSquareButton>
                </Box>

                <Box ml='20px' mt='-20px'>

                    <GradientSquareButton isGradient= {false}>
                        <Image source={road} alt='icon of a road' resizeMode='contain'/>
                    </GradientSquareButton>
                </Box>
                
                <Box ml='20px' mt='-30px'>
                    <GradientSquareButton isGradient= {false}>
                        <Image source={helmet} alt='icon of a helmet' resizeMode='contain'/>
                    </GradientSquareButton>
                </Box>

                <Box ml='20px' mt='-40px'>
                    <GradientSquareButton isGradient= {false}>
                        <Image source={mountain} alt='icon of a mountain' resizeMode='contain'/>
                    </GradientSquareButton>
                </Box>
                
            </HStack>
        </Box>

    )
}