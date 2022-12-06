import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import { DetailBackground } from "../../atomic/atoms/DetailBackground";
import MainBanner from "../../atomic/molecules";
import Card from "../../atomic/molecules/Card";
import api from "../../service/api";


type CardProps = {
    title: string;
    price: number;
    model: string;
    image: string;
    id: string;
}

export function Home(){

    const [equipments, setequipments]= useState<CardProps[]>([])

    useEffect (() => {
        async function getEquipments( ) {
            try{
                const {data} = await api.get('equipments')
                              
                setequipments(data)

            }catch(err){
                console.log(err)
            }
            
        }
        getEquipments()
    },[])

    return(
    <Box flex= '1' padding='20px' pt='-10px' position='relative'>
        <DetailBackground/>
        <MainBanner/>
        {console.log(equipments)}
        <Card/>
    </Box>
    )
}