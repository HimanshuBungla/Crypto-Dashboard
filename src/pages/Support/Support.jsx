import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import SupportCard from './component/SupportCard'
import ContactCard from './component/ContactCard'
import { IoMdMail } from 'react-icons/io'
import { AiTwotoneMessage } from 'react-icons/ai'
// import InfoCard from '../../../../../React-10-Projects-master/React-10-Projects-master/project-6/src/pages/Dashboard/components/InfoCard'
import InfoCard from 'E:\REACT\p6\project6\src\pages\Dashboard\Components\InfoCard.jsx'
import { Stack } from '@chakra-ui/react'

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  )
}

export default Support
