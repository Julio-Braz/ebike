import { useRoute } from "@react-navigation/native";
import {  Box, Image, HStack, Text, Button } from "native-base";
import React, { useEffect, useState } from "react";
import api from "../../service/api";
import { CardProps } from "../Home";
import rectangle from '../../img/rectangle.png'
import { ImagePreview } from "../../atomic/atoms/ImagePreview";
import { ButtonDetail } from "../../atomic/atoms/ButtonDetail";

type RouteParams = {
    equipmentId: string;    
}

export function Detail (){
    
    const route = useRoute();
    const {equipmentId } = route.params as RouteParams;

    const [equipment, setEquipment] = useState<CardProps>({} as CardProps)

    useEffect(() => {
        async function getEquipmentsById(){
            try {
                const response = await api.get(`equipments/${equipmentId}`)

                setEquipment(response.data)
            } catch (error) {
                alert('Ops, algo de errado aconteceu')
            }
            
        } getEquipmentsById();
    }, []);
    
    return(
    <>
            <Box 
                flex='1'
                position='relative'
                justifyContent='center'
                alignItems = 'center'
             >
            <Image 
                source={rectangle}
                alt='Image Detail'
                position='absolute'
                top='0'
                right='0'
                bottom='0'
            />
            <ImagePreview 
            showDescription={false} 
            image={equipment.image}
            alt='Image Detail'/>
              
            </Box>

             {false? (
             <Box 
                bg='primary.100'
                justifyContent='center'
                p='7'
                borderRadius={30}
                shadow={5}
                h='110px'

            >
                <HStack w='100%' justifyContent= 'space-between'>
                    <ButtonDetail title='Description'/>
                    <ButtonDetail title='Specification'/>
                </HStack>
            </Box> 
            ) : (
                <Box 
                    bg='primary.100' 
                    borderTopRadius={30} 
                    shadow={5}
                     h='440px'
                 >
                <Box pl='7' p='7' pt='7'>
                    <HStack w='100%' justifyContent= 'space-between'>
                        <ButtonDetail title='Description'/>
                        <ButtonDetail title='Specification'/>
                    </HStack>
                    <Box mt='30'>
                        <Text bold color='white' fontSize='17'>
                            {equipment.title}                       
                        </Text>

                        <Text color='white' opacity='0.6' mt='8'>
                        orem ipsum dolor sit amet. Et odit vero ut dolor similique et voluptatibus numquam. Et dolores amet et corporis saepe cum veritatis expedita et adipisci voluptas sed ipsum reprehenderit.orem ipsum do.

            
                        </Text>
                        {/* gerar um flatlist para percorrer melhor a descrição. */}
                    </Box>
                            
                </Box>
                <HStack 
                    bg='primary.200'
                    borderRadius={30}
                    justifyContent='space-between'
                    shadow={5}
                    h={100}
                    w={'100%'}
                    mt='30'
                    alignItems='center'
                    p='7'
                    >
                    <Text bold color= 'ocean.200' fontSize='17'
                         >${equipment.price}
                    </Text>
                                          
                        <Button 
                        w='149'
                        h='43'
                        justifyContent='center'
                        alignItems='center'
                        borderRadius='10px'
                        shadow={5}
                        bg='ocean.200'
                        _pressed={{bgColor: 'ocean.100'}}
                        onPress={() => {}}
                        >
                            Add to cart
                        </Button>
            
                </HStack> 

            </Box>
            )}                       
      </>  
    );
}