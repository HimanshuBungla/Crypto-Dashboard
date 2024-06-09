import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../Components/DashboardLayout"
import PortfolioSection from "./Components/PortfolioSection"
import PriceSection from "./Components/PriceSection"
import Transactions from "./Components/Transactions";
import InfoCard from "./Components/InfoCard";
const dashboard = ({ }) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid gridTemplateColumns={{
        base: "repeat(1,1fr)",
        xl: "repeat(2,1fr)",
      }}
      gap={6}
      >
        <GridItem colSpan={{
          base:1,
          lg:2,
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />  
        </GridItem>
        <GridItem>
          <Transactions/>
        </GridItem>
        <GridItem>
          <InfoCard imgUrl="\dot_bg.svg" text = "Learn More about Loans - Keep you Bitcoin, access it's value without selling it." tagtext = "Loan" inverted={false}/>
        </GridItem>
        <GridItem>
          <InfoCard imgUrl="\grid_bg.svg" text= "Learn more about our real estate, mortage and corporate account services" tagtext="Contact" inverted={true}/>
        </GridItem>
      </Grid>


    </DashboardLayout>
  )
}

export default dashboard
