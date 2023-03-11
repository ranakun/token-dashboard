import { H1, Container, Image, LabelLg } from "@threshold-network/components"
import { Outlet } from "react-router-dom"
import thresholdWordMark from "../../static/images/thresholdWordMark.svg"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import Network from "./Network"
import { PageComponent } from "../../types"
import { featureFlags } from "../../constants"
import AnnouncementBanner from "../../components/AnnouncementBanner"
import ranadid2 from "../../static/images/ranadid2.png"

const Overview: PageComponent = () => {
  useDocumentTitle("Insaanity - Overview")

  return (
    <Container maxW={{ base: "2xl", xl: "6xl" }} my={16}>
      {/* <Image src={thresholdWordMark} mb={4} /> */}
      <LabelLg>INSAANITY</LabelLg>
      <H1 mb={12}>Overview</H1>
      {featureFlags.TBTC_V2 && (
        <AnnouncementBanner
          variant="primary"
          imgSrc={ranadid2}
          preTitle="get started"
          title="Jump to the iBTC dApp!"
          href="/tBTC"
          buttonText="Start Minting"
        />
      )}
      <Outlet />
    </Container>
  )
}

Overview.route = {
  path: "overview",
  index: false,
  pages: [Network],
  isPageEnabled: true,
}

export default Overview
