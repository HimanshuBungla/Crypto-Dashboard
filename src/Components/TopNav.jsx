import React from 'react'
import {FaBars, FaUserTie} from "react-icons/fa"
import { Box, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
const TopNav = ({title,onOpen}) => {
  return (
    <Box bg="white" px="4">
        <HStack maxWidth="70rem" mx="auto" h="16" justify="space-between">
          <Icon as={FaBars} onClick={onOpen} display={{
            base:"block",
            lg:"none",
          }}/>
            <Heading fontWeight="medium" fontSize="28px">
              {title}
            </Heading>
            <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
    </HStack>
    </Box>
  )
}

export default TopNav
