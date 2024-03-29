import PageLayout from "../PageLayout"
import { PageComponent } from "../../types"
import HowItWorksPage from "./HowItWorks"
import TBTCBridge from "./Bridge"
import { featureFlags } from "../../constants"

const MainTBTCPage: PageComponent = (props) => {
  return <PageLayout title={props.title} pages={props.pages} />
}

MainTBTCPage.route = {
  path: "iBTC",
  index: false,
  pages: [TBTCBridge],
  title: "iBTC",
  isPageEnabled: featureFlags.TBTC_V2,
}

export default MainTBTCPage
