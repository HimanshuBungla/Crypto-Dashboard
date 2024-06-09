import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import {RxDashboard} from "react-icons/rx"
import {BsArrowDownUp} from 'react-icons/bs';
import {BiSupport} from 'react-icons/bi';
import { Link } from 'react-router-dom';
const SideNav = () => {

    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            link: "/transactions",
        },
    ];

    
  return (
    <Stack bg="white" justify="space-between" boxShadow={{base:"none", lg:"lg"}} width={{base:"full",lg:"16rem"}} h="100vh">
      <Box>
      <Heading textalign="center" fontSize="20px" as="h1" pt="3.5rem"> Himanshu Bungla</Heading>
      <Box mt="6" mx="3">
      {
        navLinks.map((nav)=>(
          <Link to={nav.link} key={nav.text}>
            <HStack 
            borderRadius="10px"
            py="3px" 
            px="4" 
            _hover={{
              bg: "#f3f3f7",
              color:"#797E8"
            }}
            color="#797E8">
                <Icon as={nav.icon}/>
                <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
            </HStack>
            </Link>
        ))
      }
      </Box>
      </Box>
      <Box  mt="6" mx="3" mb="6">
      <Link to="/support">
      <HStack 
            borderRadius="10px" 
            py="3px" 
            px="4" 
            _hover={{
              bg: "#f3f3f7",
              color:"#797E8"
            }}
            color="#797E8">
                <Icon as={BiSupport}/>
                <Text fontSize="14px" fontWeight="medium">Support</Text>
            </HStack>
      </Link>
      </Box>
      
    </Stack>
  )
}

export default SideNav;
