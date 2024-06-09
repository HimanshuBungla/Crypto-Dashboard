import React from 'react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgUrl , text,tagtext,inverted}) => {
  return (
    <CustomCard
    bgColor={inverted ? "p.purple" : "white"}
    bgImage={imgUrl} 
    bgSize="cover" 
    bgRepeat="no-repeat">
        <Tag 
        bg={inverted ? "white" : "p.purple"} 
        color={inverted ? "p.purple":"white"} 
        borderRadius="full">
            {tagtext} 
        </Tag>
        <Text mt="4" fontWeight="medium" textStyle="h5" color={inverted ? "white" : "black.80"}>
            {text}
        </Text>
    </CustomCard>
  )
}

export default InfoCard
