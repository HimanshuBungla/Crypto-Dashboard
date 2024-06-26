import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
    return (
        <Card p="6" borderRadius="1rem" flexGrow={1}>
            <Stack spacing={6}>
                <Text fontWeight="medium" fontSize="sm">
                    You will receive response within 24 hours of time of submit.
                </Text>

                <HStack flexDirection={
                    {
                        base: "column",
                        md: "row",
                    }
                }>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder='Enter your first name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder='Enter your last name' />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder='Enter your email' />
                </FormControl>
                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder='Enter your message' />
                </FormControl>
                <Checkbox defaultChecked >
                    <Text fontSize="xs">
                        I agree with
                        <Box as="span" color="p.purple">
                            Terms & Conditions.
                        </Box>
                    </Text>
                </Checkbox>
                <Stack>
                    <Button fontSize="sm">Send a message</Button>
                    <Button fontSize="sm" colorScheme='gray'>Book a metting</Button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ContactCard
