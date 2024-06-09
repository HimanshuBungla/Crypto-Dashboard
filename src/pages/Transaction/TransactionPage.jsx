import React from 'react'
import { Button, Card, Flex, HStack, Icon, Tag } from '@chakra-ui/react'
import DashboardLayout from '../../Components/DashboardLayout'
import { AiOutlineDownload } from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
const TransactionPage = () => {

  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>

          <TabList display="flex" width="full" pt="4" justifyContent="space-between">
            <HStack>
              {
                tabs.map((tab) => (
                  <Tab key={tab.name} display="flex" gap="2" pb="2">
                    {tab.name}
                    <Tag colorScheme="gray" borderRadius="full">
                      {tab.count}
                    </Tag>
                  </Tab>
                ))
              }
            </HStack>
            <InputGroup  pr="6" maxWidth="200px">
              <InputLeftElement pointerEvents='none'>
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type='tel' placeholder='Search' />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default TransactionPage
