import { useRoute } from "@react-navigation/native";
import { Text, Box, Image } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import api from "../../service/api";
import { CardProps } from "../Home";
import rectangle from '../../img/rectangle.png'

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
        <SafeAreaView>
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
            </Box>
        </SafeAreaView>
    )
}